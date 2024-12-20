import React, {
    ChangeEvent,
    ComponentProps,
    FC,
    ReactElement,
    useEffect,
    useRef,
    useState
} from 'react'
import Expander from 'makeup-expander'
import * as scrollKeyPreventer from 'makeup-prevent-scroll-keys'
import classNames from 'classnames'
import { EbayListboxOption } from '../ebay-listbox/listbox-option'
import { filterByType } from '../utils'
import { EbayIcon } from '../ebay-icon'
import { EbayListbox, EbayListboxProps } from '../ebay-listbox/'
import { EbayChangeEventHandler } from '../events'
import { EbayButtonProps } from '../ebay-button'

const RenderText: FC<{
    alwaysDisplay?: boolean,
    icon?: ReactElement,
    labelId?: string,
    text?: string,
    unselectedText?: string,
    postfixLabel?: string
}> = ({
    alwaysDisplay,
    icon,
    labelId,
    text,
    unselectedText,
    postfixLabel
}) => {
    if (icon) {
        return (
            <span id={labelId} className="btn__text">
                {icon}
            </span>
        )
    }

    if (text || alwaysDisplay) {
        const displayText = text || unselectedText
        return (
            <span id={labelId} className="btn__text">
                {displayText}
                {postfixLabel && <span className="btn__postfix-label">{postfixLabel}</span>}
            </span>
        )
    }
}


function getSelectedValueIndex({ selected, value, options }) {
    if (selected !== undefined) {
        return selected
    }

    if (value !== undefined) {
        return options.findIndex(option => option.props.value === value)
    }

    return options.findIndex(option => option.props.selected)
}

export type ChangeEventProps = {
    index: number;
    selected: string[];
    wasClicked: boolean;
}

export type EbayListboxButtonProps = Omit<ComponentProps<'button'>, 'onChange'> & {
    selected?: number;
    borderless?: boolean;
    fluid?: boolean;
    maxHeight?: string;
    prefixId?: string;
    prefixLabel?: string;
    floatingLabel?: string;
    unselectedText?: string;
    a11yIconPrefixText?: string;
    collapseOnSelect?: boolean;
    hasError?: boolean;
    listSelection?: EbayListboxProps['listSelection'];
    postfixLabel?: string;
    split?: EbayButtonProps['split'];
    truncate?: EbayButtonProps['truncate'];
    variant?: 'form';
    onChange?: EbayChangeEventHandler<HTMLSpanElement, ChangeEventProps>;
    onCollapse?: () => void;
    onExpand?: () => void;
}

export const EbayListboxButtonOption = EbayListboxOption

export const EbayListboxButton: FC<EbayListboxButtonProps> = ({
    'aria-invalid': invalid,
    a11yIconPrefixText,
    borderless,
    children,
    className,
    collapseOnSelect,
    disabled,
    floatingLabel,
    fluid,
    hasError,
    listSelection,
    maxHeight,
    name,
    postfixLabel,
    prefixId,
    prefixLabel,
    selected,
    split,
    truncate,
    unselectedText = '-',
    value,
    variant,
    onChange = () => {},
    onExpand = () => {},
    onCollapse = () => {},
    ...rest
}) => {
    const containerRef = useRef<HTMLDivElement & HTMLSpanElement>()
    const buttonRef = useRef<HTMLButtonElement>()
    const expanderRef = useRef<Expander>()
    const options = filterByType(children, EbayListboxOption)
    const [selectedIndex, setSelectedIndex] = useState(getSelectedValueIndex({ selected, value, options }))
    const selectedOption = options[selectedIndex]
    const selectedText = selectedOption && (selectedOption.props.text || selectedOption.props.children)
    const selectedIcon = selectedOption && selectedOption.props.icon
    const a11ySelectedIconText =
        selectedIcon && selectedText
    const labelId = prefixId && 'expand-btn-text'

    useEffect(() => {
        setSelectedIndex(getSelectedValueIndex({ selected, value, options }))
    }, [value, selected])

    useEffect(() => {
        function handleExpand() {
            containerRef.current?.querySelector('.listbox-button__listbox')?.scroll()
            onExpand()
        }

        function handleCollapse() {
            requestAnimationFrame(() => {
                buttonRef.current?.focus()
            })
            onCollapse()
        }

        if (options.length && !disabled) {
            expanderRef.current = new Expander(containerRef.current, {
                alwaysDoFocusManagement: true,
                autoCollapse: true,
                expandOnClick: true,
                simulateSpacebarClick: true,
                contentSelector: '.listbox-button__listbox',
                hostSelector: '.listbox-button__control',
                expandedClass: 'listbox-button--expanded',
                focusManagement: 'content'
            })

            containerRef.current.addEventListener('expander-expand', handleExpand)
            containerRef.current.addEventListener('expander-collapse', handleCollapse)
        }

        scrollKeyPreventer.add(buttonRef.current)

        return () => {
            if (expanderRef.current) {
                expanderRef.current.destroy()
                expanderRef.current = undefined
            }

            if (containerRef.current) {
                containerRef.current.removeEventListener('expander-expand', handleExpand)
                containerRef.current.removeEventListener('expander-collapse', handleCollapse)
            }

            if (buttonRef.current) {
                scrollKeyPreventer.remove(buttonRef.current)
            }
        }
    }, [disabled])

    function handleListboxChange(event: ChangeEvent<HTMLSpanElement>, data: ChangeEventProps) {
        if (collapseOnSelect !== false) {
            expanderRef.current.expanded = false
        }

        setSelectedIndex(data.index)
        onChange(event, data)
    }

    function handleListboxEscape() {
        expanderRef.current.expanded = false
    }

    const Container = truncate && !fluid ? 'div' : 'span'

    return (
        <Container
            ref={containerRef}
            className={classNames('listbox-button', className, {
                'listbox-button--fluid': fluid,
                'listbox-button--form': variant === 'form',
                'listbox-button--error': invalid || hasError
            })}>
            <button
                {...rest}
                disabled={disabled}
                ref={buttonRef}
                className={classNames('listbox-button__control', 'btn', {
                    [`btn--split-${split}`]: split,
                    'btn--borderless': borderless,
                    'btn--form': !borderless,
                    'btn--truncated': truncate,
                    'btn--floating-label': floatingLabel
                })}
                aria-label={a11ySelectedIconText && `${a11yIconPrefixText}: ${a11ySelectedIconText}`}
                value={selectedText}
                type="button"
                aria-haspopup="listbox"
                aria-labelledby={labelId && `${prefixId} ${labelId}`}
                aria-invalid={invalid || hasError}>
                <span className="btn__cell">
                    {floatingLabel ? (
                        <>
                            <span className={classNames(
                                'btn__floating-label',
                                'btn__floating-label--animate',
                                !selectedText && 'btn__floating-label--inline'
                            )}>
                                {floatingLabel}
                            </span>
                            <RenderText
                                icon={selectedIcon}
                                labelId={labelId}
                                text={selectedText}
                                unselectedText={unselectedText}
                                postfixLabel={postfixLabel} />
                        </>
                    ) : (
                        <>
                            {prefixLabel ? (
                                <span className="btn__label">
                                    {prefixLabel}
                                </span>
                            ) : null}

                            <RenderText
                                alwaysDisplay
                                icon={selectedIcon}
                                labelId={labelId}
                                text={selectedText}
                                unselectedText={unselectedText}
                                postfixLabel={postfixLabel} />
                        </>
                    )}

                    <EbayIcon name="chevronDown12" />
                </span>
            </button>
            {/* Both classes "listbox-button__listbox" and "listbox-button__options" is for backward compatibility */}
            <EbayListbox
                className="listbox-button__listbox listbox-button__options"
                selectClassName="listbox-button__native"
                activeClassName="listbox-button__option--active"
                tabIndex={-1}
                listSelection={listSelection}
                name={name}
                maxHeight={maxHeight}
                onChange={handleListboxChange}
                onEscape={handleListboxEscape}
            >
                {options.map((option, index) => (
                    <EbayListboxOption
                        {...option.props}
                        key={option.props.value || index}
                        selected={index === selectedIndex}
                        className={classNames('listbox-button__option', option.props.className)} />
                ))}
            </EbayListbox>
        </Container>
    )
}
