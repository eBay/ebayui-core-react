import React, {
    ChangeEvent, cloneElement, ComponentProps, FC, useState, FocusEvent, isValidElement, ReactElement
} from 'react'
import classNames from 'classnames'
import EbaySelectOption from './ebay-select-option'
import { EbayIcon } from '../ebay-icon'
import { filterByType, withForwardRef } from '../common/component-utils'
import { useFloatingLabel } from '../common/floating-label-utils/hooks'
import { EbayChangeEventHandler } from '../common/event-utils/types'

const isControlled = value => typeof value !== 'undefined'

type SelectValue = string | ReadonlyArray<string> | number;
export type ChangeEventProps = { index: number, selected: string[] }
export type EbaySelectProps = Omit<ComponentProps<'select'>, 'onChange'> & {
    borderless?: boolean;
    defaultValue?: SelectValue;
    onChange?: EbayChangeEventHandler<HTMLSelectElement, ChangeEventProps>;
    floatingLabel?: string;
    forwardedRef?: React.Ref<HTMLSelectElement>;
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
    forwardedRef,
    children,
    inputSize,
    invalid,
    ...rest
}) => {
    const isFieldInvalid = invalid || rest['aria-invalid'] === 'true'
    const [value, setValue] = useState<SelectValue>(defaultValue)
    const {
        label,
        Container,
        onBlur: onFloatingLabelBlur,
        onFocus: onFloatingLabelFocus,
        ref
    } = useFloatingLabel({
        ref: forwardedRef,
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

        onChange(e, { index: selectedIndex, selected: [newValue] })
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

export default withForwardRef<EbaySelectProps>(EbaySelect)

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

    const childrenOpts = filterByType(children, EbaySelectOption).map(c => isValidElement(c) && cloneElement(c, {}))

    if (childrenOpts) {
        optGroups = optionGroups(childrenOpts)
        let currentGroupName
        childrenOpts.forEach((option: ReactElement, idx) => {
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
