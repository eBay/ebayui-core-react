import React from 'react'
import { Meta } from '@storybook/react'
import { EbayVideo, EbayVideoSource } from '../../index'

export default {
    component: EbayVideo,
    title: 'ebay-video'
} as Meta;

const defaultProps = {
    a11yLoadText: "Loading",
    a11yPlayText: "Click to play",
    errorText: "An error has occurred",
    reportText: "Report",
    width: 600,
    height: 400
}

export const Default = () => (
    <EbayVideo
        {...defaultProps}
        volumeSlider
        sources={[{ src: 'https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd', type: 'dash' }]}
    />
)

export const MP4Video = () => (
    <EbayVideo
        {...defaultProps}
        volumeSlider
        sources={[{ src: 'https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4', type: 'dash' }]}
    />
)

export const MultipleVideos = () => (
    <EbayVideo
        {...defaultProps}
        sources={[{
            src: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
            type: "hls"
        }, {
            src: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
            type: "dash"
        }]}
    />
)

export const NestedSource = () => (
    <EbayVideo
        {...defaultProps}
        thumbnail="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/iphone-thumbnail.jpg"
    >
        <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd" />
    </EbayVideo>
)

export const NestedSources = () => (
    // todo: support HLS (probably mux.js)
    <EbayVideo
        {...defaultProps}
        thumbnail="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/iphone-thumbnail.jpg"
    >
        <EbayVideoSource
            src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
            type="hls"
        />
        <EbayVideoSource
            src="https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"
            type="dash"
        />
    </EbayVideo>
)

// todo: support textTracks
