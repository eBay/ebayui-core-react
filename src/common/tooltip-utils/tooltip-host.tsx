import { Children, cloneElement, FC, ReactElement, RefObject } from 'react'
import classNames from 'classnames'

export type TooltipHostProps = {
    className?: string;
    children?: ReactElement;
    forwardedRef?: RefObject<any>;
}

const TooltipHost: FC<TooltipHostProps> = ({
    children,
    className,
    forwardedRef,
    ...rest
}) => {
    Children.only(children)
    return cloneElement(children, {
        ref: forwardedRef,
        ...rest,
        className: classNames(className, children.props.className)
    })
}

export default TooltipHost
