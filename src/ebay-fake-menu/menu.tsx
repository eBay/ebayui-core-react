import React, { Children, cloneElement, ComponentProps, FC, KeyboardEvent, MouseEvent, ReactElement } from 'react'
import classNames from 'classnames'
import { EbayFakeMenuItemProps } from './index'

type DivProps = Omit<ComponentProps<'div'>, 'onKeyDown'>
type Callback = (event: KeyboardEvent | MouseEvent, i: number) => void
export type EbayFakeMenuProps = {
    checked?: number;
    onSelect?: Callback;
} & DivProps

const EbayFakeMenu: FC<EbayFakeMenuProps> = ({
    checked,
    className,
    onSelect = () => {},
    children,
    ...rest
}) => (
    <div {...rest} className={classNames(className, 'fake-menu')}>
        <ul className="fake-menu__items">
            {Children.map(children, (child: ReactElement, i) => (
                <li>
                    {cloneElement(child, {
                        checked: checked === i,
                        ...child.props,
                        onClick: e => onSelect(e, i)
                    } as EbayFakeMenuItemProps)}
                </li>
            ))}
        </ul>
    </div>
)

export default EbayFakeMenu
