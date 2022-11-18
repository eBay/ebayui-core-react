import React, { Children, cloneElement, useEffect, useState, ComponentProps, FC, ReactElement, Ref } from 'react'
import classNames from 'classnames'
import useRovingIndex from '../common/event-utils/use-roving-index'
import { usePrevious } from '../common/component-utils/usePrevious'
import { handleActionKeydown } from '../common/event-utils'
import { withForwardRef } from '../common/component-utils'
import { MenuItemProps } from './menu-item'
import { EbayMenuItem, EbayMenuType, EbayMenuPriority } from './index'

type SpanProps = Omit<ComponentProps<'span'>, 'onKeyDown' | 'onChange'>
type Callback = (i: number, checked: boolean, e?: KeyboardEvent) => void
type Props = SpanProps & {
    type?: EbayMenuType;
    priority?: EbayMenuPriority;
    checked?: number;
    autofocus?: boolean;
    onKeyDown?: Callback;
    onSelect?: Callback;
    onChange?: Callback;
    forwardedRef?: Ref<HTMLDivElement>;
}

const changedIndex = (arr1: boolean[], arr2: boolean[]): number => arr1.findIndex((x, i) => arr2[i] !== x)

const EbayMenu: FC<Props> = ({
    type,
    priority = 'secondary',
    checked,
    className,
    autofocus,
    onKeyDown = () => {},
    onChange = () => {},
    onSelect = () => {},
    forwardedRef,
    children,
    ...rest
}) => {
    const childrenArray = Children.toArray(children)
    const [focusedIndex, setFocusedIndex] = useRovingIndex(children, EbayMenuItem, autofocus === true ? 0 : undefined)
    const [checkedIndexes, setCheckedIndexes] = useState<boolean[]>(childrenArray.map(() => false))

    const updateIndex = (index: number, value: boolean, resetOthers = false) => {
        setCheckedIndexes(prevCheckedIndexes =>
            prevCheckedIndexes.map((indexChecked, i) => {
                const defaultValue = resetOthers ? false : indexChecked
                return index === i ? value : defaultValue
            }))
    }
    const selectIndex = (index: number) => {
        switch (type) {
            case 'radio':
                return updateIndex(index, true, true)
            case 'checkbox':
                return updateIndex(index, !checkedIndexes[index])
            default:
                return
        }
    }

    useEffect(() => {
        if (type === 'radio') {
            if (checked === undefined) {
                const checkedIndex = childrenArray.findIndex((child: ReactElement) => child.props.checked)
                if (checkedIndex > -1) {
                    selectIndex(checkedIndex)
                }
            } else {
                selectIndex(checked)
            }
        } else if (type === 'checkbox') {
            setCheckedIndexes(childrenArray.map((child: ReactElement) => child.props.checked))
        }
    }, [])

    const prevCheckedIndexes = usePrevious(checkedIndexes)
    useEffect(() => {
        if (type === 'radio') {
            const checkedIndex = checkedIndexes.findIndex(Boolean)
            if (checkedIndex > -1) {
                onChange(checkedIndex, true)
                onSelect(checkedIndex, true)
            }
        } else if (type === 'checkbox') {
            if (prevCheckedIndexes) {
                const index = changedIndex(prevCheckedIndexes, checkedIndexes)
                onChange(index, checkedIndexes[index])
                onSelect(index, checkedIndexes[index])
            }
        }
    }, [checkedIndexes])

    return (
        <span {...rest} className={classNames(className, 'menu')}>
            <div className="menu__items" role="menu" ref={forwardedRef}>
                {childrenArray.map((child: ReactElement, i) => {
                    const {
                        onClick = () => {},
                        onFocus = () => {},
                        ...itemRest
                    }: MenuItemProps = child.props

                    return cloneElement(child, {
                        ...itemRest,
                        focused: i === focusedIndex,
                        tabIndex: focusedIndex === undefined ? 0 : -1,
                        checked: checkedIndexes[i],
                        onFocus: e => {
                            setFocusedIndex(i)
                            onFocus(e)
                        },
                        onClick: e => {
                            setFocusedIndex(i)
                            selectIndex(i)
                            onClick(e)
                        },
                        onKeyDown: e => {
                            handleActionKeydown(e, () => {
                                selectIndex(i)
                            })
                            onKeyDown(i, checkedIndexes[i], e)
                        }
                    } as MenuItemProps)
                })}
            </div>
        </span>
    )
}

export default withForwardRef(EbayMenu)
