import React, {
    ComponentProps,
    FC,
    RefObject,
    useImperativeHandle,
    useRef,
    useState
} from 'react'
import { withForwardRef } from '../common/component-utils'
import { getRelativeRects } from './helpers'
import { ListItemRef } from './types'

type ListProps = ComponentProps<'li'>
type CarouselItemProps = ListProps & {
    slideWidth?: number;
    offset?: number;
    className?: string;
    forwardedRef?: RefObject<ListItemRef>
};


const EbayCarouselItem: FC<CarouselItemProps> = ({ slideWidth, offset, forwardedRef, children, ...rest }) => {
    const itemRef = useRef()
    const [isVisible, setIsVisible] = useState(false)

    useImperativeHandle(forwardedRef, () => {
        if (!itemRef.current) return

        const { left, right } = getRelativeRects(itemRef.current)
        const fullyVisible = left === undefined ||
            (left - offset >= -0.01 && right - offset <= slideWidth + 0.01)

        setIsVisible(fullyVisible)

        return {
            left,
            right,
            fullyVisible
        }
    }, [slideWidth, offset])

    return (
        <li
            ref={itemRef}
            aria-hidden={!isVisible}
            {...rest}>
            {children}
        </li>
    )
}

export default withForwardRef(EbayCarouselItem)
