export type CarouselControlType = 'prev' | 'next'

export type MovementDirection = 'LEFT' | 'RIGHT' | 'NONE'

export type RelativeRect = Pick<ClientRect, 'left'|'right'>

export type ListItemRef = {
    left: number;
    right: number;
    fullyVisible: boolean;
}
