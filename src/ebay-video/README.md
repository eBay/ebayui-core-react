# ebay-video
Video player. Supports either MPD or M3U8 playlist formats.
Natively uses dash.js player under the hood. Loads it async after the video player is loaded on the page.
For resizing, `ebay-video` supports fixed width or variable width. If no width is provided the video tag will resize based on the container size.

## Usage
```bash
yarn add @ebay/ui-core-react shaka-player
```
```jsx
import { EbayVideo } from '@ebay/ui-core-react/ebay-video'

<EbayVideo
    width="600"
    height="400"
    onLoadError(err => {
        console.log("handle error", err);
    })>
        <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd"/>
</EbayVideo>
```

## Props

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---

