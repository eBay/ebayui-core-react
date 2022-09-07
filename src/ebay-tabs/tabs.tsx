import React, { cloneElement, ComponentProps, FC, useEffect, useState } from 'react'
import { handleActionKeydown, handleLeftRightArrowsKeydown } from '../common/event-utils'
import Tab from './tab'
import TabPanel from './tab-panel'
import { Activation, Size } from './types'
import { filterBy, filterByType } from '../common/component-utils'
import classNames from 'classnames'

type TabsProps = ComponentProps<'div'> & {
    index?: number;
    /** @deprecated Kept for backward-compatibility with eBayUI */
    // eslint-disable-next-line react/no-unused-prop-types
    fake?: boolean;
    size?: Size;
    activation?: Activation;
    onTabSelect?: (index: number) => void;
};

const Tabs: FC<TabsProps> = ({
    id,
    className,
    index = 0,
    size = 'medium',
    activation = 'auto',
    onTabSelect = () => {},
    children
}) => {
    const headings: HTMLElement[] = []

    const [selectedIndex, setSelectedIndex] = useState<number>(index)
    const [focusedIndex, setFocusedIndex] = useState<number>(index)

    const onSelect = (i: number): void => {
        onTabSelect(i)
        setSelectedIndex(i)
        setFocusedIndex(i)
    }

    /**
     * Handle a11y for heading
     * https://ebay.gitbooks.io/mindpatterns/content/disclosure/tabs.html
     */
    const onKeyDown = (ev: KeyboardEvent, i: number): void => {
        handleActionKeydown(ev, () => {
            ev.preventDefault()

            if (activation === 'manual') {
                onSelect(i)
            }
        })

        handleLeftRightArrowsKeydown(ev, () => {
            ev.preventDefault()

            const len = filterByType(children, Tab).length
            const direction = ['Left', 'ArrowLeft'].includes(ev.key) ? -1 : 1
            const nextIndex = (focusedIndex + len + direction) % len
            setFocusedIndex(nextIndex)

            if (activation !== 'manual') {
                onSelect(nextIndex)
            }
        })
    }

    useEffect(() => {
        onSelect(index)
    }, [index])

    useEffect(() => {
        headings[focusedIndex]?.focus()
    }, [focusedIndex])

    const fake = filterBy(children, ({ type, props }) => type === Tab && props.href).length > 0
    const large = size === 'large'

    const tabHeadings = filterByType(children, Tab).map((item, i) => {
        const { href, children: content } = item.props
        const itemProps = {
            refCallback: ref => { headings[i] = ref },
            index: i,
            parentId: id,
            selected: selectedIndex === i,
            href,
            children: content,
            onClick: () => { onSelect(i) },
            onKeyDown: e => { onKeyDown(e, i) }
        }

        return cloneElement(item, itemProps)
    })

    const tabPanels = filterByType(children, TabPanel).map((item, i) => {
        const { children: content } = item.props
        const itemProps = {
            index: i,
            parentId: id,
            selected: selectedIndex === i,
            fake,
            children: content
        }

        return cloneElement(item, itemProps)
    })

    return fake ? (
        <div id={id} className={classNames(className, 'fake-tabs')}>
            <ul className={classNames('fake-tabs__items', { 'fake-tabs__items--large': large })}>
                {tabHeadings}
            </ul>
            <div className="fake-tabs__content">
                {tabPanels}
            </div>
        </div>
    ) : (
        <div id={id} className={classNames(className, 'tabs')}>
            <div className={classNames('tabs__items', { 'tabs__items--large': large })} role="tablist">
                {tabHeadings}
            </div>
            <div className="tabs__content">
                {tabPanels}
            </div>
        </div>
    )
}

export default Tabs
