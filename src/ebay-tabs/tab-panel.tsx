import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

type TabPanelProps = ComponentProps<'div'> & {
    index?: number;
    parentId?: string;
    selected?: boolean;
    fake?: boolean;
}

const TabPanel: FC<TabPanelProps> = ({
    children,
    index,
    parentId,
    selected,
    fake,
    className,
    ...rest
}) =>
    fake ? (
        <div {...rest} className={classNames(className, 'fake-tabs__cell')}>
            {children}
        </div>
    ) : (
        <div
            {...rest}
            aria-labelledby={`default-tab-${index}`}
            className={classNames(className, 'tabs__panel')}
            id={`${parentId || 'default'}-tabpanel-${index}`}
            role="tabpanel"
            hidden={!selected}
        >
            <div className="tabs__cell">
                {children}
            </div>
        </div>
    )

export default TabPanel
