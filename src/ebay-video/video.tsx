import React, { ComponentProps, FC, ReactEventHandler, SyntheticEvent, useEffect, useRef, useState } from 'react'
import shaka from 'shaka-player/dist/shaka-player.ui.debug'
import { VideoAction, VideoPlayView, VideoSource } from './types'
import 'shaka-player/dist/controls.css'

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
    const [failed, setFailed] = useState<boolean>()

    const container = useRef()
    const videoComponent = useRef()
    const player = useRef()

    const handleError = (err: any) => {
        setLoading(false)
        setFailed(true)
        onLoadError(err)
    }
    const loadSource = (index = 0) => {
        // eslint-disable-next-line no-extra-parens
        (player.current as any)
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
        console.log('useEffect', container)
        const video = videoComponent.current as any

        if (!video || !container?.current) return

        player.current = new shaka.Player(video)

        if (!player?.current) return

        const ui = new shaka.ui.Overlay(
            player.current,
            container.current,
            video,
            reportText
        )

        // shaka.ui.Controls.registerElement('report', new Report.Factory(this.input.reportText));
        //
        //         // eslint-disable-next-line no-undef,new-cap
        //         shaka.ui.Controls.registerElement('captions', new TextSelection.Factory());

        ui.configure({
            addBigPlayButton: true,
            controlPanelElements: [],
            addSeekBar: false
        })

        // do we need this?
        // const videoConfig = {
        //     addBigPlayButton: false,
        //     addSeekBar: true,
        //     controlPanelElements: [
        //         'play_pause',
        //         'time_and_duration',
        //         'spacer',
        //         'mute',
        //         'report',
        //         'fullscreen',
        //         'overflow_menu'
        //     ],
        //     overflowMenuButtons: ['captions']
        // }
        //
        // video.ui?.configure(videoConfig)
        loadSource()
        // Listen for error events.
        // player.addEventListener('error', onErrorEvent)

        // onError is executed if the asynchronous load fails.
    }, [])

    return (
        <div className="video-player__container" ref={container}>
            <video
                width="640"
                ref={videoComponent as any}
                poster={thumbnail}
                controls={loaded || undefined}
                {...rest}
            >
                {sources.map(source => {
                    <source {...source} />
                })}
            </video>
        </div>
    )
}

export default EbayVideo
