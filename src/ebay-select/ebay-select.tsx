import React, { ChangeEvent, cloneElement, ComponentProps, FC, useState, useRef, FocusEvent } from 'react'
import classNames from 'classnames'
import EbaySelectOption from './ebay-select-option'
import { EbayIcon } from '../ebay-icon'
import { filterByType } from '../common/component-utils'
import { useFloatingLabel } from '../common/floating-label-utils/hooks'

const isControlled = value => typeof value !== 'undefined'

type SelectValue = string | ReadonlyArray<string> | number;
export type EbaySelectProps = Omit<ComponentProps<'select'>, 'onChange'> & {
    borderless?: boolean;
    defaultValue?: SelectValue;
    onChange?: (e: ChangeEvent<HTMLSelectElement>, selectedIndex: number, newValue: SelectValue) => void;
    floatingLabel?: string;
    inputSize?: 'default' | 'large';
    invalid?: boolean;
};

const EbaySelect: FC<EbaySelectProps> = ({
    value: controlledValue,
    defaultValue,
    className,
    borderless,
    name,
    disabled,
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    floatingLabel,
    children,
    inputSize,
    invalid,
    ...rest
}) => {
    const isFieldInvalid = invalid || rest['aria-invalid'] === 'true'
    const [value, setValue] = useState<SelectValue>(defaultValue)
    const selectRef = useRef(null)
    const {
        label,
        Container,
        onBlur: onFloatingLabelBlur,
        onFocus: onFloatingLabelFocus,
        ref
    } = useFloatingLabel({
        ref: selectRef,
        inputId: rest.id,
        className: className,
        disabled: disabled,
        label: floatingLabel,
        inputValue: controlledValue,
        inputSize: inputSize,
        invalid: isFieldInvalid
    })

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value: newValue, selectedIndex } = e.target

        if (!isControlled(controlledValue)) {
            setValue(newValue)
        }
        if (ref?.current) {
            ref?.current?.focus?.()
        }
        
        onChange(e, selectedIndex, newValue)
    }

    const handleBlur = (event: FocusEvent<HTMLSelectElement>) => {
        onBlur(event)
        onFloatingLabelBlur()
    }

    const handleFocus = (event: FocusEvent<HTMLSelectElement>) => {
        onFocus(event)
        onFloatingLabelFocus()
    }

    const selectClassName = classNames('select', className, {
        'select--borderless': borderless,
        'select--large': inputSize === `large`
    })

    return (
        <Container>
            {label}
            <span className={selectClassName}>
                <select
                    {...rest}
                    name={name}
                    value={isControlled(controlledValue) ? controlledValue : value}
                    disabled={disabled}
                    onChange={handleSelectChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    ref={ref}
                >
                    {options(children)}
                </select>
                <EbayIcon name="chevronDown12" height="8" width="8" />
            </span>
        </Container>
    )
}

export default EbaySelect

function optionGroups(data) {
    const optGroups = {}

    data.forEach(opt => {
        const option = opt.props
        if (option.optgroup) {
            if (!Object.prototype.hasOwnProperty.call(optGroups, option.optgroup)) {
                optGroups[option.optgroup] = []
            }
            optGroups[option.optgroup].push(option)
        }
    })

    return optGroups
}

function options(children) {
    const renderedGroups = []
    const allOptions = []
    let optGroups = {}
    let withinGroup = false

    const childrenOpts = filterByType(children, EbaySelectOption).map(c => cloneElement(c, {}))

    if (childrenOpts) {
        optGroups = optionGroups(childrenOpts)
        let currentGroupName
        childrenOpts.forEach((option, idx) => {
            const { value, optionClassName, children: optionChildren, optgroup } = option.props
            withinGroup = optgroup && renderedGroups.indexOf(optgroup) === -1

            if (withinGroup) { // This will always be true when the very first group is encountered.
                currentGroupName = optgroup
                const currentGroupOptions = optGroups[currentGroupName]
                const opts = currentGroupOptions.map((groupOption) => (
                    <EbaySelectOption
                        key={`opt-${groupOption.value}`}
                        value={groupOption.value}
                        className={groupOption.optionClassName}>
                        {groupOption.children}
                    </EbaySelectOption>))
                allOptions.push(<optgroup key={idx} label={optgroup}>{opts}</optgroup>)
                renderedGroups.push(optgroup)
            } else if (!optgroup) {
                /**
                 * The check below is necessary because we could still be in a group which has already
                 * been added to the renderedGroups array. In that case it will be skipped.
                 */
                allOptions.push(
                    <EbaySelectOption key={idx} value={value} className={optionClassName}>
                        {optionChildren}
                    </EbaySelectOption>)
            }
        })
        return allOptions
    }
}
