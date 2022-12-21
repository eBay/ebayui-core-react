import React, {
    Children,
    cloneElement,
    FC,
    KeyboardEvent,
    MouseEvent,
    ReactElement,
    useEffect,
    useState
} from 'react'
import classNames from 'classnames'
import useRovingIndex from '../common/event-utils/use-roving-index'
import { isActionKey } from '../common/event-utils'
import { withForwardRef } from '../common/component-utils'
import { EbayMenuItem, MenuItemProps, EbayMenuProps } from './index'
import { Key } from '../common/event-utils/types'

const EbayMenu: FC<EbayMenuProps> = ({
    type,
    priority = 'secondary',
    checked,
    className,
    autofocus,
    onClick = () => {},
    onKeyDown = () => {},
    onChange = () => {},
    onSelect = () => {},
    forwardedRef,
    children,
    ...rest
}) => {
    const childrenArray = Children.toArray(children) as ReactElement[]
    const [focusedIndex, setFocusedIndex] = useRovingIndex(children, EbayMenuItem, autofocus === true ? 0 : undefined)
    const [checkedIndexes, setCheckedIndexes] = useState<boolean[]>(childrenArray.map(() => false))

    const valuesFromChecked = (indexes: boolean[]): string[] =>
        childrenArray.reduce((values, item, i) =>
            indexes[i] ? [...values, item.props.value] : values, [])

    const indexesFromChecked = (indexes: boolean[]): number[] =>
        indexes.reduce((all, value, i) => value ? [...all, i] : all, [])

    const eventProps = (index: number, indexes: boolean[]) => ({
        index,
        checked: indexesFromChecked(indexes)
    })
    const checkboxEventProps = (index: number, indexes: boolean[]) => ({
        ...eventProps(index, indexes),
        indexes: indexesFromChecked(indexes),
        checkedValues: valuesFromChecked(indexes)
    })

    const updateIndex = (index: number, value: boolean, resetOthers = false): boolean[] | void => {
        let anyChanges = false
        const newValues = checkedIndexes.map((indexChecked, i) => {
            const defaultValue = resetOthers ? false : indexChecked
            if (index === i) {
                if (indexChecked !== value) {
                    anyChanges = true
                }
                return value
            }
            return defaultValue
        })
        if (anyChanges) {
            setCheckedIndexes(newValues)
            return newValues
        }
    }
    const selectIndex = (index: number): boolean[] | void => {
        switch (type) {
            case 'radio':
                return updateIndex(index, true, true)
            case 'checkbox':
                return updateIndex(index, !checkedIndexes[index], false)
            default:
                return checkedIndexes.map((_, i) => i === index)
        }
    }

    useEffect(() => {
        if (type === 'radio') {
            if (checked === undefined) {
                const checkedIndex = childrenArray.findIndex(child => child.props.checked)
                if (checkedIndex > -1) {
                    selectIndex(checkedIndex)
                }
            } else {
                selectIndex(checked)
            }
        } else if (type === 'checkbox') {
            setCheckedIndexes(childrenArray.map(child => Boolean(child.props.checked)))
        }
    }, [])

    const handleChange = (
        e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>,
        index: number,
        newValues: boolean[]
    ) => {
        switch (type) {
            case 'radio':
            case 'checkbox':
                return onChange(e, checkboxEventProps(index, newValues))
            default:
                return onSelect(e, eventProps(index, newValues))
        }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLElement>, index: number) => {
        let newValues
        if (isActionKey(e.key as Key)) {
            newValues = selectIndex(index)
            if (newValues) {
                handleChange(e, index, newValues)
            }
        }
        switch (type) {
            case 'radio':
            case 'checkbox':
                return onKeyDown(e, checkboxEventProps(index, newValues || checkedIndexes))
            default:
                return onKeyDown(e, eventProps(index, newValues || checkedIndexes))
        }
    }

    const handleClick = (e: MouseEvent<HTMLElement>, index: number) => {
        setFocusedIndex(index)
        const newValues = selectIndex(index)
        if (newValues) {
            handleChange(e, index, newValues)
        }
    }

    return (
        <span {...rest} className={classNames(className, 'menu')}>
            <div className="menu__items" role="menu" ref={forwardedRef}>
                {childrenArray.map((child: ReactElement, i) => {
                    const {
                        onFocus: onItemFocus = () => {},
                        onClick: onItemClick = () => {},
                        onKeyDown: onItemKeyDown = () => {},
                        ...itemRest
                    }: MenuItemProps = child.props

                    return cloneElement(child, {
                        ...itemRest,
                        focused: i === focusedIndex,
                        tabIndex: focusedIndex === undefined ? 0 : -1,
                        checked: checkedIndexes[i],
                        onFocus: e => {
                            setFocusedIndex(i)
                            onItemFocus(e)
                        },
                        onClick: e => {
                            handleClick(e, i)
                            onItemClick(e)
                            onClick(e)
                        },
                        onKeyDown: e => {
                            handleKeyDown(e, i)
                            onItemKeyDown(e)
                        }
                    } as MenuItemProps)
                })}
            </div>
        </span>
    )
}

export default withForwardRef(EbayMenu)
