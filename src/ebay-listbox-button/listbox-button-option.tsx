import React, { ComponentProps, FC, MouseEvent, RefObject } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'

type EbayListboxButtonOptionProps = ComponentProps<'input'> & {
    selected?: boolean;
    index?: number;
    onClick?: (event: MouseEvent<HTMLDivElement>, value: any, index: number) => void;
    innerRef?: RefObject<HTMLDivElement>;
};

const ListboxOption: FC<EbayListboxButtonOptionProps> = ({
    value,
    children,
    selected,
    onClick,
    index,
    innerRef,
    className,
    ...rest
}) => {
    const wrapperClassName = classNames(`listbox-button__option`, className,
        { 'listbox-button__option--active': selected })
    return (
        <div
            {...rest}
            className={wrapperClassName}
            role="option"
            aria-selected={selected}
            ref={innerRef}
            onClick={(e) => {onClick(e, value, index)}}
        >
            <span className="listbox-button__value">{children}</span>
            <EbayIcon name="tick16" />
        </div>)
}

export default ListboxOption
