import { PointerDirection } from './types'

export const DEFAULT_POINTER_DIRECTION: PointerDirection = 'bottom'

export const POINTER_STYLES: { [key in PointerDirection]: any } = {
    left: {
        transform: 'translateX(16px) translateY(-50%)',
        left: '100%',
        right: 'auto',
        top: '-5px',
        bottom: 'auto'
    },

    'left-top': {
        transform: 'translateX(16px)',
        left: '100%',
        right: 'auto',
        top: '-100%',
        bottom: 'auto'
    },

    'left-bottom': {
        transform: 'translateX(16px)',
        left: '100%',
        right: 'auto',
        top: 'auto',
        bottom: '-7px'
    },

    'right': {
        transform: 'translateX(-16px) translateY(-50%)',
        left: 'auto',
        right: '100%',
        top: '-4px',
        bottom: 'auto'
    },

    'right-top': {
        transform: 'translateX(-16px)',
        left: 'auto',
        right: '100%',
        top: '-100%',
        bottom: 'auto'
    },

    'right-bottom': {
        transform: 'translateX(-16px)',
        left: 'auto',
        right: '100%',
        top: 'auto',
        bottom: '-50%'
    },

    'top': {
        transform: 'translateX(-50%)',
        left: '50%',
        right: 'auto',
        top: 'auto',
        bottom: 'auto'
    },

    'top-left': {},

    'top-right': {
        left: 'auto',
        right: '-7px',
        top: 'auto',
        bottom: 'auto'
    },

    'bottom-right': {
        left: 'auto',
        right: '-7px',
        top: 'auto',
        bottom: 'calc(100% + 12px)'
    },

    'bottom-left': {
        left: '-7px',
        right: 'auto',
        top: 'auto',
        bottom: 'calc(100% + 12px)'
    },

    'bottom': {
        transform: 'translateX(-50%)',
        left: '50%',
        right: 'auto',
        top: 'auto',
        bottom: 'calc(100% + 12px)'
    }
}
