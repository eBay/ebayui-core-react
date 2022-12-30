import React, { ComponentProps, FC, ReactEventHandler, SyntheticEvent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import shaka from 'shaka-player/dist/shaka-player.ui.debug'
import 'shaka-player/dist/controls.css'

import { filterByType } from '../common/component-utils'
import { EbayIcon } from '../ebay-icon'
import { EbayProgressSpinner } from '../ebay-progress-spinner'
import { VideoAction, VideoPlayView } from './types'
import EbayVideoSource from './source'

// const MAX_RETRIES = 3
// const DEFAULT_SPINNER_TIMEOUT = 2000
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
    thumbnail,
    muted,
    playView = 'inline',
    a11yLoadText,
    a11yPlayText,
    reportText,
    volumeSlider,
    volume = 1,
    errorText,
    onVolumeChange = () => {
    },
    onLoadError = () => {
    },
    onPlay = () => {
    },
    // onReport = () => {},
    children,
    ...rest
}) => {
    const [loaded, setLoaded] = useState<boolean>()
    const [buffering, setBuffering] = useState<boolean>()
    const [playing, setPlaying] = useState<boolean>()
    const [failed, setFailed] = useState<boolean>()

    const containerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const playerRef = useRef<any>(null)
    const uiRef = useRef(null)

    const sources = filterByType(children, EbayVideoSource).map(({ props }) => props)

    const handleError = (err: any) => {
        setLoaded(true)
        setFailed(true)
        onLoadError(err)
    }

    const loadSource = (index = 0) => {
        if (!sources.length || !playerRef.current) return

        setLoaded(false)
        playerRef.current
            .load(sources[index]?.src)
            .then(() => {
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
                setLoaded(true)
            })
    }

    useEffect(() => {
        const video = videoRef.current
        const container = containerRef.current

        if (!video || !container) return

        video.volume = volume
        playerRef.current = new shaka.Player(video)

        if (playerRef.current) {
            uiRef.current = new shaka.ui.Overlay(
                playerRef.current,
                container,
                video,
                reportText
            )
            uiRef.current.configure({
                addBigPlayButton: true,
                controlPanelElements: [],
                addSeekBar: false
            })
        }

        loadSource()
        hideSpinner(container)

        playerRef.current.addEventListener('error', handleError)
        playerRef.current.addEventListener('buffering', (e) => {
            setBuffering(e.buffering)
        })

        return () => {
            playerRef.current.destroy()
            uiRef.current.destroy()
        }
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

        setPlaying(true)
        onPlay(e, { player: playerRef.current })
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
            className={classNames('video-player', { 'video-player--poster': !playing })}
        >
            {!playing && loaded && !failed && !buffering &&
                <div className="shaka-play-button-container">
                    <button
                        onClick={handleOnPlayClick}
                        className="shaka-play-button"
                        style={{ opacity: 1, zIndex: 999 }}
                        aria-label={a11yPlayText}
                    >
                        <EbayIcon name="videoPlay" />
                    </button>
                </div>
            }
            <div
                className="video-player__container"
                ref={containerRef}
            >
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
                    {errorText}
                </div>
            </div>
            <div className={classNames('video-player__overlay', {
                'video-player__overlay--hidden': loaded && !buffering
            })}>
                <EbayProgressSpinner size="large" aria-label={a11yLoadText} />
            </div>
        </div>
    )
}

function hideSpinner(container: HTMLDivElement) {
    const shakaSpinner = container.querySelectorAll('.shaka-spinner')[0]
    if (shakaSpinner) {
        shakaSpinner.setAttribute('hidden', '')
    }
}

export default EbayVideo
