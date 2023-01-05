import React, {
    ComponentProps,
    FC,
    RefObject,
    useEffect,
    useImperativeHandle,
    useRef,
    useState
} from 'react'
import classNames from 'classnames'
import { withForwardRef } from '../common/component-utils'
import { getRelativeRects } from './helpers'
import { ListItemRef } from './types'

type ListProps = ComponentProps<'li'>
type CarouselItemProps = ListProps & {
    slideWidth?: number;
    offset?: number;
    className?: string;
    forwardedRef: RefObject<ListItemRef>
};


const CarouselItem: FC<CarouselItemProps> = ({ slideWidth, offset, forwardedRef, className, children, ...rest }) => {
    const itemRef = useRef()
    const [isVisible, setIsVisible] = useState(false)

    const itemsProp = () => {
        const { left, right } = getRelativeRects(itemRef.current)
        const fullyVisible = left === undefined ||
            (left - offset >= -0.01 && right - offset <= slideWidth + 0.01)

        return {
            left,
            right,
            fullyVisible
        }
    }

    useEffect(() => {
        const { fullyVisible } = itemsProp()

        setIsVisible(fullyVisible)
    }, [itemRef.current, slideWidth, offset])

    useImperativeHandle(forwardedRef, itemsProp, [itemRef.current, slideWidth, offset])

    return (
        <li
            ref={itemRef}
            aria-hidden={!isVisible}
            className={classNames('carousel__snap-point', className)}
            {...rest}>
            {children}
        </li>
    )
}

export default withForwardRef(CarouselItem)
