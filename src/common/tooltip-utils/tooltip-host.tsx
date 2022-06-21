import { Children, cloneElement, FC, ReactElement } from 'react'
import classNames from 'classnames'

type Props = {
    className?: string;
    children: ReactElement;
}

const TooltipHost: FC<Props> = ({
    children,
    className,
    ...rest
}) => {
    Children.only(children)
    return cloneElement(children, {
        ...rest,
        className: classNames(className, children.props.className)
    })
}

export default TooltipHost
