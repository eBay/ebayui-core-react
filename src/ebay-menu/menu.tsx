import React, {
    Children, cloneElement, useEffect, useState,
    FC, ReactElement
} from 'react'
import classNames from 'classnames'
import useRovingIndex from '../common/event-utils/use-roving-index'
import { usePrevious } from '../common/component-utils/usePrevious'
import { handleActionKeydown } from '../common/event-utils'
import { MenuItemProps } from './menu-item'
import { EbayMenuItem } from './index'
import { MenuProps } from './index'


const changedIndex = (arr1: boolean[], arr2: boolean[]): number => arr1.findIndex((x, i) => arr2[i] !== x)

const EbayMenu: FC<MenuProps> = ({
    baseEl: Container = 'span',
    type,
    priority = 'secondary',
    checked,
    className,
    onKeyDown = () => {},
    onChange = () => {},
    onSelect = () => {},
    children,
    ...rest
}) => {
    const childrenArray = Children.toArray(children)
    const [focusedIndex, setFocusedIndex] = useRovingIndex(children, EbayMenuItem)
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
            if (checked !== undefined) {
                selectIndex(checked)
            }
            const checkedIndex = childrenArray.findIndex((child: ReactElement) => child.props.checked)
            if (checkedIndex > -1) {
                selectIndex(checkedIndex)
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
        <Container {...rest} className={classNames(className, 'menu')}>
            <div className="menu__items" role="menu">
                {childrenArray.map((child: ReactElement, i) => {
                    const {
                        onClick = () => {},
                        onFocus = () => {},
                        ...itemRest
                    }: MenuItemProps = child.props

                    return cloneElement(child, {
                        ...itemRest,
                        type,
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
                            onKeyDown(i, checkedIndexes[i])
                        }
                    } as MenuItemProps)
                })}
            </div>
        </Container>
    )
}

export default EbayMenu
