import React, {
    Children, cloneElement,
    ComponentProps, FC, ReactElement, KeyboardEvent, MouseEvent
} from 'react'
import classNames from 'classnames'
import { EbayFakeMenuItemProps } from './index'

type SpanProps = Omit<ComponentProps<'div'>, 'onKeyDown'>
type Callback = (event: KeyboardEvent | MouseEvent, i: number) => void
type Props = SpanProps & {
    itemMatchesUrl?: boolean;
    onKeyDown?: Callback;
    onSelect?: Callback;
}

const EbayFakeMenu: FC<Props> = ({
    className,
    itemMatchesUrl = true,
    onKeyDown = () => {},
    onSelect = () => {},
    children,
    ...rest
}) => {
    const childrenArray = Children.toArray(children)
    const defaultAriaCurrent = itemMatchesUrl === false ? 'true' : 'page'

    return (
        <div {...rest} className={classNames(className, 'fake-menu')}>
            <ul className="fake-menu__items" tabIndex={-1}>
                {childrenArray.map((child: ReactElement, i) => {
                    const {
                        current,
                        onClick = () => {},
                        ...itemRest
                    }: EbayFakeMenuItemProps = child.props

                    return (
                        <li key={i}>
                            {cloneElement(child, {
                                ...itemRest,
                                'aria-current': current ? defaultAriaCurrent : undefined,
                                onClick: e => {
                                    onSelect(e, i)
                                    onClick(e)
                                },
                                onKeyDown: e => {
                                    onKeyDown(e, i)
                                }
                            } as EbayFakeMenuItemProps)}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default EbayFakeMenu
