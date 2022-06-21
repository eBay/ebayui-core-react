import React, { FC } from 'react'
import { EbayTextbox, EbayTextboxProps } from '../ebay-textbox'
import { withForwardRef } from '../common/component-utils'
import { EbaySelect, EbaySelectProps } from '../ebay-select'

type Props = EbayTextboxProps & EbaySelectProps & {
    label: string;
    elementType?: 'textbox' | 'select'
};

const EbayFloatingLabel: FC<Props> = ({
    label,
    forwardedRef,
    elementType = 'textbox',
    ...rest
}) => {
    const inputRef = (): any => forwardedRef

    if (elementType === 'select') {
        return (
            <EbaySelect
                {...rest}
                floatingLabel={label} />
        )
    }

    return (
        <EbayTextbox
            {...rest}
            ref={inputRef()}
            floatingLabel={label}
        />
    )
}

export default withForwardRef(EbayFloatingLabel)
