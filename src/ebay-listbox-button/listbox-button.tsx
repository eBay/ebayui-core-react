import React, {
    Children, cloneElement, useEffect, useRef, useState,
    ComponentProps, FC, KeyboardEvent, ReactElement
} from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'
import { Key } from '../common/event-utils/types'
import { filterByType } from '../common/component-utils'
import EbayListboxButtonOption from './listbox-button-option'

type EbayListboxButtonProps = ComponentProps<'input'> & {
    borderless?: boolean;
    fluid?: boolean;
    maxHeight?: string;
    prefixId?: string;
    floatingLabel?: string;
    onSelect?: (e: MouseEvent | KeyboardEvent, value: any, index: number) => void;
}

const ListboxButton: FC<EbayListboxButtonProps> = ({
    children,
    name,
    onSelect = () => {},
    value,
    borderless,
    fluid,
    className,
    maxHeight,
    prefixId,
    floatingLabel,
    ...rest
}) => {
    const optionsContainerRef = useRef<HTMLDivElement>(null)
    const optionsParentContainerRef = useRef<HTMLDivElement>()
    const optionsByIndexRef = useRef(new Map())
    const buttonRef = useRef<HTMLButtonElement>()

    const listBoxButtonOptions = filterByType(children, EbayListboxButtonOption)
    if (!listBoxButtonOptions.length) {
        throw new Error(`EbayListboxButton: Please use a
        EbayListboxButtonOption that defines the options of the listbox`)
    }
    const getInitialSelectedOption = (): { option: any, index: number } => {
        const selectedIndex = listBoxButtonOptions.findIndex(({ props }) => props.value === value)
        const index = selectedIndex > -1 ? selectedIndex : 0
        return {
            option: listBoxButtonOptions[index],
            index
        }
    }

    // Get the default Selected value and set it in the state
    const {
        option: selectedOptionFromValue,
        index: initialSelectedOptionIndex
    } = getInitialSelectedOption()
    // Update the selected option to the state
    const [selectedOption, setSelectedOption] = useState(selectedOptionFromValue)
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedOptionIndex)
    // Update the expanded status to the state
    const [expanded, setExpanded] = useState(false)
    // Additional flag to avoid multiple re-render when users tries to open and close
    const [optionsOpened, setOptionsOpened] = useState(false)

    useEffect(() => {
        setSelectedOption(selectedOptionFromValue)
    }, [value])

    const childrenArray = Children.toArray(children) as ReactElement[]
    const getSelectedValueByIndex = (index: number) => childrenArray[index].props.value
    const getSelectedOption = (currentIndex: number) => optionsByIndexRef.current.get(currentIndex)
    const setActiveDescendant = (index: number) => {
        const optionsContainerEle = optionsContainerRef.current
        optionsContainerEle.setAttribute(`aria-activedescendant`, getSelectedOption(index).id)
    }

    const onOptionsSelect = (e, optionValue, index) => {
        // OnSelect set the selectedValue to the state and expanded to false to close the list box
        setSelectedOption(childrenArray[index])
        setSelectedIndex(index)
        setExpanded(false)
        setActiveDescendant(index)
        buttonRef.current.focus()
        onSelect(e, optionValue, index)
    }

    const reset = () => {
        setExpanded(false)
        setSelectedOption(childrenArray[initialSelectedOptionIndex])
    }

    const makeOptionActive = (index: number) => {
        const optionEle = optionsContainerRef.current.children[index]
        optionEle.setAttribute(`aria-selected`, 'true')
        optionEle.classList.add(`listbox-button__option--active`)
    }

    const makeOptionInActive = (index: number) => {
        const optionEle = optionsContainerRef.current.children[index]
        optionEle.setAttribute(`aria-selected`, 'false')
        optionEle.classList.remove(`listbox-button__option--active`)
    }

    // Followed the implementation from W3
    // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
    const scrollOptions = (index: number) => {
        const listboxOptionsContainerNode = optionsParentContainerRef.current
        const currentTarget = getSelectedOption(index)
        if (listboxOptionsContainerNode.scrollHeight > listboxOptionsContainerNode.clientHeight) {
            const scrollBottom = listboxOptionsContainerNode.clientHeight + listboxOptionsContainerNode.scrollTop
            const elementBottom = currentTarget.offsetTop + currentTarget.offsetHeight
            if (elementBottom > scrollBottom) {
                listboxOptionsContainerNode.scrollTop = elementBottom - listboxOptionsContainerNode.clientHeight
            } else if (currentTarget.offsetTop < listboxOptionsContainerNode.scrollTop) {
                listboxOptionsContainerNode.scrollTop = currentTarget.offsetTop
            }
        }
    }

    const makeSelections = (updatedIndex) => {
        makeOptionActive(updatedIndex)
        makeOptionInActive(selectedIndex)
        scrollOptions(updatedIndex)
        setActiveDescendant(updatedIndex)
        setSelectedIndex(updatedIndex)
        setSelectedOption(childrenArray[updatedIndex])
    }

    const focusOptionsContainer = (focusOptions?: FocusOptions) =>
        setTimeout(() => optionsContainerRef?.current?.focus(focusOptions), 0)
    const onButtonClick = () => {
        setExpanded(!expanded)
        setOptionsOpened(true)
        focusOptionsContainer({ preventScroll: true })
    }
    const onButtonKeyup = (e: KeyboardEvent<HTMLButtonElement>) => {
        switch (e.key as Key) {
            case 'Escape':
                setExpanded(false)
                break
            case 'Enter':
                focusOptionsContainer()
                break
            default:
                break
        }
    }
    const onOptionContainerKeydown = (e: KeyboardEvent): void => {
        switch (e.key as Key) {
            case ' ':
            case 'PageUp':
            case 'PageDown':
            case 'Home':
            case 'End':
                e.preventDefault()
                break
            case 'Down':
            case 'ArrowDown':
                e.preventDefault()
                if (selectedIndex !== listBoxButtonOptions.length - 1) {
                    makeSelections(selectedIndex < listBoxButtonOptions.length - 1 ? selectedIndex + 1 : 0)
                }
                break
            case 'Up':
            case 'ArrowUp':
                e.preventDefault()
                if (selectedIndex !== 0) {
                    makeSelections(selectedIndex > 0 ? selectedIndex - 1 : listBoxButtonOptions.length - 1)
                }
                break
            case 'Enter':
                setExpanded(false)
                setTimeout(() => setSelectedOption(childrenArray[selectedIndex]))
                setTimeout(() => buttonRef.current.focus(), 0)
                onSelect(e, getSelectedValueByIndex(selectedIndex), selectedIndex)
                break
            case 'Esc':
            case 'Escape':
                reset()
                break
            default:
                break
        }
    }

    // We want to minic the select box behavior so we take the onSelect that passed
    // at the parent level and use it for the OnClick on the list box since its a fake dropdown
    const updatelistBoxButtonOptions = listBoxButtonOptions
        .map((child, index) => cloneElement(child, {
            index,
            key: index,
            selected: child.props.value === selectedOption.props.value,
            onClick: (e, optionValue) => onOptionsSelect(e, optionValue, index),
            innerRef: optionNode => !optionNode
                ? optionsByIndexRef.current.delete(index)
                : optionsByIndexRef.current.set(index, optionNode)
        }))
    const wrapperClassName = classNames('listbox-button', className, { 'listbox-button--fluid': fluid })
    const buttonClassName = classNames('expand-btn', {
        'expand-btn--borderless': borderless,
        'expand-btn--floating-label': floatingLabel
    })
    const expandBtnTextId = prefixId && 'expand-btn-text'

    return (
        <span className={wrapperClassName}>
            <button
                {...rest}
                type="button"
                className={buttonClassName}
                aria-expanded={expanded}
                aria-haspopup="listbox"
                aria-labelledby={prefixId && `${prefixId} ${expandBtnTextId}`}
                onClick={onButtonClick}
                // https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
                onMouseDown={(e) => e.preventDefault()}
                onKeyUp={onButtonKeyup}
                ref={buttonRef}
            >
                <span className="expand-btn__cell">
                    {floatingLabel ? (
                        <span className="expand-btn__floating-label">
                            {floatingLabel}
                        </span>
                    ) : null}
                    <span className="expand-btn__text" id={expandBtnTextId}>{selectedOption.props.children}</span>
                    <EbayIcon name="dropdown" />
                </span>
            </button>
            {(expanded || optionsOpened) &&
                <div
                    className="listbox-button__listbox"
                    ref={optionsParentContainerRef}
                    style={{ maxHeight: maxHeight }}>
                    <div
                        className="listbox-button__options"
                        role="listbox"
                        tabIndex={0}
                        ref={optionsContainerRef}
                        onKeyDown={(e) => onOptionContainerKeydown(e)}
                        // adding onMouseDown preventDefault b/c on IE the onClick event is not being fired on each
                        // option https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
                        onMouseDown={(e) => e.preventDefault()}
                        onBlur={() => {
                            setExpanded(false)
                            setTimeout(() => buttonRef.current.focus(), 0)
                        }}
                    >
                        {updatelistBoxButtonOptions}
                    </div>
                </div>}
            <select hidden className="listbox-button__native" name={name} value={selectedOption.props.value}>
                {
                    updatelistBoxButtonOptions.map((option, i) =>
                        <option value={option.props.value} key={i} />)
                }
            </select>
        </span>
    )
}

export default ListboxButton
