import React, { ComponentProps, FC, useEffect, useRef, useState } from 'react'
import shaka from 'shaka-player'

export type EbayVideoProps = ComponentProps<HTMLDivElement> & {
    thumbnail: string;
};

// todo: listen to window resize

const EbayVideo: FC<EbayVideoProps> = ({
    thumbnail,
    ...rest
}) => {
    const [player, setPlayer] = React.useState()

    const [loaded, setLoaded] = useState<boolean>()


    const videoComponent = useRef()

    useEffect(() => {
        const manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'

        const video = videoComponent.current

        const newPlayer = new shaka.Player(video)
        setPlayer(newPlayer)

        // Listen for error events.
        // player.addEventListener('error', onErrorEvent)

        // Try to load a manifest.
        // This is an asynchronous process.
        newPlayer
            .load(manifestUri)
            .then(() => {
                console.log('The video has now been loaded!')
                setLoaded(true)
            })
            .catch(console.error)
        // onError is executed if the asynchronous load fails.
    }, [])

    return (
        <video
            width="640"
            ref={videoComponent}
            poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
            controls={loaded || undefined}
        />
    )
}

export default EbayVideo
