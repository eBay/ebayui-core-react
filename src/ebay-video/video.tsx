import React, {
    ComponentProps,
    createRef,
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
import { Simulate } from 'react-dom/test-utils'
import { EbayIcon } from '../ebay-icon'
import load = Simulate.load;
import ReactDOM from 'react-dom'

const MAX_RETRIES = 3
const DEFAULT_SPINNER_TIMEOUT = 2000
const ERROR_ANOTHER_LOAD = 7000
const ERROR_NO_PLAYER = 11

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
    onLoadError = () => {},
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
        setLoading(false)
        setFailed(true)
        onLoadError(err)
    }
    const loadSource = (index = 0) => {
        // eslint-disable-next-line no-extra-parens
        player.current
            ?.load(sources[index]?.src)
            .then(() => {
                console.log('The video has now been loaded!')
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
            })
    }

    useEffect(() => {
        const video = videoRef.current
        const container = containerRef.current

        if (!video || !container) return

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

            // Replace play icon
            if (container) {
                const playButton = container.querySelectorAll('.shaka-play-button')[0]
                playButton.removeAttribute('icon')
                ReactDOM.render(<EbayIcon name="videoPlay" />, playButton)

                // const shakaSpinner = this.el.querySelector('.shaka-spinner')
                // if (shakaSpinner) {
                //     setTimeout(() => {
                //         shakaSpinner.hidden = true
                //     }, this.input.spinnerTimeout || DEFAULT_SPINNER_TIMEOUT)
                // }
            }
        }

        loadSource()
        // Listen for error events.
        // player.addEventListener('error', onErrorEvent)

        // onError is executed if the asynchronous load fails.
    }, [])

    const showControls = () => {
        if (!uiRef.current) return

        const videoConfig = {
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

        uiRef.current.configure(videoConfig)
        videoRef.current.controls = false
    }

    const handlePlaying = () => {
        showControls()
        setPlayed(true)
    }

    return (
        <div className={classNames('video-player', { 'video-player--poster': !played })}>
            <div
                className="video-player__container"
                style={{ width: `${width}px`, height: `${height}px` }}
                ref={containerRef}>
                <video
                    ref={videoRef as any}
                    style={{ width: `${width}px`, height: `${height}px` }}
                    poster={thumbnail}
                    onPlaying={handlePlaying}
                    {...rest}
                >
                    {sources.map(source => {
                        <source {...source} />
                    })}
                </video>
            </div>
            <div className={classNames('video-player__overlay', { 'video-player__overlay--hidden': loaded })}>
                loading
            </div>
        </div>
    )
}

export default EbayVideo
