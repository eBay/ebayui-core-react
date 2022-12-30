import React, {
    ComponentProps,
    FC,
    ReactEventHandler,
    SyntheticEvent,
    useEffect,
    useRef,
    useState
} from 'react'
import shaka from 'shaka-player/dist/shaka-player.ui'
import { VideoAction, VideoPlayView, VideoSource } from './types'
import 'shaka-player/dist/controls.css'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'

const ERROR_ANOTHER_LOAD = 7000
const ERROR_NO_PLAYER = 11
const defaultVideoConfig = {
    addBigPlayButton: false,
    addSeekBar: true,
    controlPanelElements: [
        'play_pause',
        'time_and_duration',
        'spacer',
        'mute',
        'report',
        'fullscreen',
        'overflow_menu'
    ],
    overflowMenuButtons: ['captions']
}

export type EbayVideoProps = ComponentProps<'div'> & {
    width?: number;
    height?: number;
    sources?: VideoSource[];
    thumbnail?: string;
    action?: VideoAction;
    volume?: number;
    muted?: boolean;
    volumeSlider?: boolean;
    playView?: VideoPlayView;
    cdnUrl?: string;
    cssUrl?: string;
    cdnVersion?: string;
    a11yLoadText: string;
    a11yPlayText: string;
    errorText: string;
    reportText: string;
    onLoadError?: (err: any) => void;
    onPlay?: (e: SyntheticEvent, { player: any }) => void;
    onVolumeChange?: (e: SyntheticEvent, { volume: number, muted: boolean }) => void;
    onReport?: ReactEventHandler;
};

// todo: listen to window resize

const EbayVideo: FC<EbayVideoProps> = ({
    width,
    height,
    sources,
    thumbnail,
    muted,
    playView = 'inline',
    reportText,
    volumeSlider,
    volume = 1,
    errorText,
    onVolumeChange = () => {},
    onLoadError = () => {},
    onPlay = () => {},
    ...rest
}) => {
    const [loading, setLoading] = useState<boolean>()
    const [loaded, setLoaded] = useState<boolean>()
    const [played, setPlayed] = useState<boolean>()
    const [failed, setFailed] = useState<boolean>()

    const containerRef = useRef(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const player = useRef(null)
    const uiRef = useRef(null)

    const handleError = (err: any) => {
        setLoaded(false)
        setFailed(true)
        onLoadError(err)
    }

    const loadSource = (index = 0) => {
        // eslint-disable-next-line no-extra-parens
        setLoading(true)
        player.current
            ?.load(sources[index]?.src)
            .then(() => {
                // videoRef.current.volume = volume
                setLoaded(true)
                setFailed(false)
            })
            .catch(err => {
                console.error(err)
                switch (err.code) {
                    case ERROR_ANOTHER_LOAD:
                        return
                    case ERROR_NO_PLAYER:
                        setTimeout(() => loadSource(index), 0)
                        break
                    default: {
                        const nextIndex = sources.length > index + 1 && index + 1
                        if (nextIndex) {
                            setTimeout(() => loadSource(nextIndex), 0)
                        } else {
                            handleError(err)
                        }
                    }
                }
            }).finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        const video = videoRef.current
        const container = containerRef.current

        if (!video || !container) return

        video.volume = volume
        player.current = new shaka.Player(video)

        if (player.current) {
            const ui = new shaka.ui.Overlay(
                player.current,
                containerRef.current,
                video,
                reportText
            )
            ui.configure({
                addBigPlayButton: true,
                controlPanelElements: [],
                addSeekBar: false
            })

            uiRef.current = ui
        }

        loadSource()
        // Listen for error events.
        // player.addEventListener('error', onErrorEvent)

        // onError is executed if the asynchronous load fails.
    }, [])

    const showControls = () => {
        if (!uiRef.current) return

        const videoConfig = { ...defaultVideoConfig }
        videoConfig.controlPanelElements = [...defaultVideoConfig.controlPanelElements]
        if (volumeSlider) {
            const insertAt =
                videoConfig.controlPanelElements.length - 2 > 0
                    ? videoConfig.controlPanelElements.length - 2
                    : videoConfig.controlPanelElements.length
            videoConfig.controlPanelElements.splice(insertAt, 0, 'volume')
        }

        uiRef.current.configure(videoConfig)
        videoRef.current.controls = false
    }

    const handlePlaying = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
        e.stopPropagation()

        showControls()

        if (playView === 'fullscreen') {
            videoRef.current.requestFullscreen()
        }

        setPlayed(true)
        onPlay(e, { player: player.current })
    }

    const handleOnPlayClick = () => {
        videoRef.current.play()
    }

    const handleVolumeChange = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
        const eventTarget = e.currentTarget
        onVolumeChange(e, { volume: eventTarget.volume, muted: eventTarget.muted })
    }

    const handleOnPause = () => {
        // On IOS, the controls force showing up if the video exist fullscreen while playing.
        // This forces the controls to always hide
        videoRef.current.controls = false
    }

    return (
        <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className={classNames('video-player', { 'video-player--poster': !played })}
        >
            {!played && loaded && !failed &&
                <div className="shaka-play-button-container">
                    <button
                        onClick={handleOnPlayClick}
                        className="shaka-play-button"
                        style={{ opacity: 1, zIndex: 999 }}>
                        <EbayIcon name="videoPlay" />
                    </button>
                </div>
            }
            <div
                className="video-player__container"
                ref={containerRef}>
                <video
                    ref={videoRef as any}
                    style={{ width: `${width}px`, height: `${height}px` }}
                    poster={thumbnail}
                    muted={muted || false}
                    onPlaying={handlePlaying as any}
                    onPause={handleOnPause as any}
                    onVolumeChange={handleVolumeChange}
                    {...rest}
                >
                    {sources.map(source => {
                        <source {...source} />
                    })}
                </video>
            </div>
            <div className={classNames('video-player__overlay', { 'video-player__overlay--hidden': !failed })}>
                <EbayIcon name="attention" />
                <div className="video-player__overlay-text">
                    {errorText || 'An error has occurred'}
                </div>
            </div>
            <div className={classNames('video-player__overlay', { 'video-player__overlay--hidden': loaded })}>
                <EbayIcon name="spinner" />
            </div>
        </div>
    )
}

export default EbayVideo
