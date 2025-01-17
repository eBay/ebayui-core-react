import {
    autoUpdate,
    flip,
    offset,
    shift,
    useFloating
} from '@floating-ui/react'

export type FloatingDropdownHookReturn = {
    overlayStyles: ReturnType<typeof useFloating>['floatingStyles']
    refs: {
        host: ReturnType<typeof useFloating>['refs']['reference']
        overlay: ReturnType<typeof useFloating>['refs']['floating']
        setHost: ReturnType<typeof useFloating>['refs']['setReference']
        setOverlay: ReturnType<typeof useFloating>['refs']['setFloating']
    }
}

export type FloatingDropdownHookArgs = {
    open?: boolean,
    options?: FloatingDropdownHookOptions
}

export type FloatingDropdownHookOptions = {
    offset?: number;
    reverse?: boolean;
}

export function useFloatingDropdown({
    open,
    options
}: FloatingDropdownHookArgs): FloatingDropdownHookReturn {
    const { floatingStyles, refs } = useFloating({
        placement: options?.reverse ? 'bottom-end' : 'bottom-start',
        open,
        middleware: [offset(options?.offset ?? 4), flip(), shift()],
        whileElementsMounted: autoUpdate
    })

    return {
        overlayStyles: floatingStyles,
        refs: {
            host: refs.reference,
            overlay: refs.floating,
            setHost: refs.setReference,
            setOverlay: refs.setFloating
        }
    }
}
