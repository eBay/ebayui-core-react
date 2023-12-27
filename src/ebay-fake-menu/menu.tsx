import React, {
    Children, cloneElement,
    ComponentProps, FC, ReactElement
} from 'react'
import classNames from 'classnames'
import { EbayFakeMenuItemProps } from './index'
import { EbayKeyboardEventHandler, EbayMouseEventHandler } from '../common/event-utils/types'

type SpanProps = Omit<ComponentProps<'div'>, 'onKeyDown' | 'onSelect'>
type Props = SpanProps & {
    itemMatchesUrl?: boolean;
    onKeyDown?: EbayKeyboardEventHandler<HTMLElement, { index: number }>;
    onSelect?: EbayMouseEventHandler<HTMLAnchorElement, { index: number }>;
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
                                    onSelect(e, { index: i })
                                    onClick(e)
                                },
                                onKeyDown: e => {
                                    onKeyDown(e, { index: i })
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
