import figma from '@figma/code-connect'

import React from 'react'
import { EbayVideo, EbayVideoSource } from '..'

figma.connect(
    EbayVideo,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=128145-216829',
    {
        example: () => (
            <EbayVideo
                width={600}
                height={400}
                onLoadError={err => {
                    // console.log('handle error', err)
                }}
                a11yLoadText="loading"
                a11yPlayText="play"
                errorText="error loading video"
            >
                <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd" />
            </EbayVideo>
        )
    }
)
