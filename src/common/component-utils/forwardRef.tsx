import React, { FC, forwardRef } from 'react'

const getDisplayName = Component => Component.displayName || Component.name || 'Component'

// todo: type it, no idea how yet
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withForwardRef = <Props, >(Component: FC<Props>) => {
    const ForwardRef = forwardRef<FC<Props>, Props>((props, ref) =>
        <Component {...props} forwardedRef={ref} />)

    ForwardRef.displayName = getDisplayName(Component)

    return ForwardRef
}
