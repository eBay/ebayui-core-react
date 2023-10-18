export type VideoAction = 'play' | 'pause'
export type VideoPlayView = 'inline' | 'fullscreen'

export type VideoSourceType = 'dash' | 'hls'
export type VideoSource = {
    src: string;
    type?: VideoSourceType
}

export type Player = Record<string, any>
