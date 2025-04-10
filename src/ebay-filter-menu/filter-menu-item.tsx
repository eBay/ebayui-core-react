import React, { ComponentProps, FC, ReactNode } from 'react'
import classNames from 'classnames'
import { EbayCheckbox } from '../ebay-checkbox'
import { EbayRadio } from '../ebay-radio'
import { EbayIcon } from '../ebay-icon'
import { useRandomId } from '../utils'
import { FilterMenuItemClick, Type, Variant } from './types'

export type EbayFilterMenuItemProps = Omit<ComponentProps<'label'> & ComponentProps<'div'>, 'children' | 'onClick'> & {
    checked?: boolean
    value?: string
    disabled?: boolean
    children: ReactNode
    onClick?: FilterMenuItemClick

    /**
     * These properties are used by EbayFilterMenu.
     * NOTE: The flag "@deprecated" is only to not show this property in the autocomplete list on the top
     * @deprecated
    */
   __classPrefix?: string
   /** @deprecated */
   __type?: Type
   /** @deprecated */
   __variant?: Variant
}

const EbayFilterMenuItem: FC<EbayFilterMenuItemProps> = ({
    checked,
    value,
    disabled,
    children,
    className,
    onClick,
    __type: type,
    __variant: variant,
    __classPrefix,
    ...rest
}) => {
    const isForm = variant === 'form'
    const isRadio = type === 'radio'
    const prefixId = isRadio ? 'radio' : 'checkbox'
    const uniqueId = useRandomId()
    const inputId = `'${prefixId}-${uniqueId}`
    const Container = isForm ? 'label' : 'div'
    const FieldComponent = isRadio ? EbayRadio : EbayCheckbox
    const fieldClassName = isRadio ? `${__classPrefix}__radio` : `${__classPrefix}__checkbox`
    const fieldIconChecked = isRadio ? `radioChecked18` : `checkboxChecked18`
    const fieldIconUnchecked = isRadio ? `radioUnchecked18` : `checkboxUnchecked18`

    const handleItemClick = event => {
        onClick?.(event, {
            value,
            checked: !checked
        })
    }

    return (
        <Container
            {...rest}
            className={classNames(className, `${__classPrefix}__item`)}
            htmlFor={isForm ? inputId : undefined}
            role={isRadio ? 'menuitemradio' : 'menuitemcheckbox'}
            onClick={handleItemClick}
            aria-checked={checked}
            aria-disabled={disabled}>
            {isForm
                ? <FieldComponent id={inputId} checked={checked} />
                : (
                    <span className={fieldClassName}>
                        <EbayIcon name={checked ? fieldIconChecked : fieldIconUnchecked} />
                    </span>
                )
            }
            <span className={`${__classPrefix}__text`}>
                {children}
            </span>
        </Container>
    )
}

export default EbayFilterMenuItem
