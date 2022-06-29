import React, { FC, forwardRef } from 'react'

const getDisplayName = <Props, >(Component: FC<Props>) => Component.displayName || Component.name || 'Component'

// Typescript will automatically find the return type crom forwardRef() function
// Disabling eslint for this use case
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withForwardRef = <Props, >(Component: FC<Props>) => {
    const ForwardRef = forwardRef<FC<Props>, Props>((props, ref) =>
        <Component {...props} forwardedRef={ref} />)

    ForwardRef.displayName = getDisplayName<Props>(Component)

    return ForwardRef
}
