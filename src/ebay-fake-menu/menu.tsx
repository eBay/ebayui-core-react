import React, {
    Children, cloneElement, useEffect, useState,
    ComponentProps, FC, ReactElement, KeyboardEvent, MouseEvent
} from 'react'
import classNames from 'classnames'
import useRovingIndex from '../common/event-utils/use-roving-index'
import { EbayFakeMenuItem, EbayFakeMenuItemProps } from './index'

type SpanProps = Omit<ComponentProps<'span'>, 'onKeyDown'>
type Callback = (event: KeyboardEvent | MouseEvent, i: number) => void
type Props = SpanProps & {
    checked?: number;
    onKeyDown?: Callback;
    onSelect?: Callback;
    onFocus?: Callback;
}

const EbayFakeMenu: FC<Props> = ({
    checked,
    className,
    onKeyDown = () => {},
    onSelect = () => {},
    children,
    ...rest
}) => {
    const childrenArray = Children.toArray(children)
    const [focusedIndex, setFocusedIndex] = useRovingIndex(children, EbayFakeMenuItem)
    const [checkedIndexes, setCheckedIndexes] = useState<boolean[]>(childrenArray.map(() => false))

    useEffect(() => {
        setCheckedIndexes(childrenArray.map((child: ReactElement) => child.props.checked))
    }, [])

    return (
        <span {...rest} className={classNames(className, 'fake-menu')}>
            <ul className="fake-menu__items" tabIndex={-1}>
                {childrenArray.map((child: ReactElement, i) => {
                    const {
                        onFocus = () => {},
                        onClick = () => {},
                        ...itemRest
                    }: EbayFakeMenuItemProps = child.props

                    return (
                        <li key={i}>
                            {cloneElement(child, {
                                ...itemRest,
                                focused: i === focusedIndex,
                                checked: checkedIndexes[i],
                                onFocus: e => {
                                    setFocusedIndex(i)
                                    onFocus(e)
                                },
                                onClick: e => {
                                    setFocusedIndex(i)
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
        </span>
    )
}

export default EbayFakeMenu
