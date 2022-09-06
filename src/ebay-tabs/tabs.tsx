import React, { Component, ComponentProps, ReactElement } from 'react'
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

type State = {
    selectedIndex: number;
    focusedIndex: number;
}

// todo: convert to hooks
class Tabs extends Component<TabsProps, State> {
    headings: HTMLElement[];

    constructor(props: TabsProps) {
        super(props)

        const { index = 0 } = props

        this.onTabSelect = this.onTabSelect.bind(this)
        this.headings = []

        this.state = {
            selectedIndex: index,
            focusedIndex: index
        }
    }

    componentDidUpdate(prevProps: TabsProps): void {
        if (this.props.index !== prevProps.index) {
            this.onTabSelect(this.props.index)
            this.headings[this.state.focusedIndex]?.focus()
        }
    }

    onTabSelect(i: number): void {
        if (this.props.onTabSelect) {
            this.props.onTabSelect(i)
        }
        this.setState({
            selectedIndex: i,
            focusedIndex: i
        })
    }

    /**
     * Handle a11y for heading
     * https://ebay.gitbooks.io/mindpatterns/content/disclosure/tabs.html
     */
    onTabKeyDown(ev: KeyboardEvent, index: number): void {
        const { activation = 'auto', children } = this.props

        handleActionKeydown(ev, () => {
            ev.preventDefault()

            if (activation === 'manual') {
                this.onTabSelect(index)
            }
        })

        handleLeftRightArrowsKeydown(ev, () => {
            ev.preventDefault()

            const len = filterByType(children, Tab).length
            const direction = ['Left', 'ArrowLeft'].includes(ev.key) ? -1 : 1
            const nextIndex = (this.state.focusedIndex + len + direction) % len
            this.setState({ focusedIndex: nextIndex })

            if (activation !== 'manual') {
                this.onTabSelect(nextIndex)
            }
        })
    }

    render(): ReactElement {
        const {
            id,
            className,
            size = 'medium',
            children
        } = this.props
        const fake = filterBy(children, ({ type, props }) => type === Tab && props.href).length > 0
        const large = size === 'large'

        const tabHeadings = filterByType(children, Tab).map((item, i) => {
            const { href, children: content } = item.props
            const itemProps = {
                refCallback: ref => { this.headings[i] = ref },
                index: i,
                parentId: id,
                selected: this.state.selectedIndex === i,
                href,
                children: content,
                onClick: () => { this.onTabSelect(i) },
                onKeyDown: e => { this.onTabKeyDown(e, i) }
            }

            return React.cloneElement(item, itemProps)
        })

        const tabPanels = filterByType(children, TabPanel).map((item, i) => {
            const { children: content } = item.props
            const itemProps = {
                index: i,
                parentId: id,
                selected: this.state.selectedIndex === i,
                fake,
                children: content
            }

            return React.cloneElement(item, itemProps)
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
}

export default Tabs
