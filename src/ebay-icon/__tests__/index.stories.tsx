import React from 'react'
import { Meta } from '@storybook/react'
import { EbayIcon } from '../index'
import { icons } from './constants'

export default {
    component: EbayIcon,
    title: 'ebay-icon'
} as Meta;

export const AllIcons = () => (
    <table>
        {icons
            .filter(icon => !icon.startsWith('programBadge'))
            .map((icon, i) =>
                <tr key={i}>
                    <td>{icon}</td>
                    <td key={icon}>
                        <EbayIcon name={icon} />
                    </td>
                </tr>
            )
        }
    </table>
)

export const DeprecatedProgramBadgeIcons = () => (
    <table>
        {icons
            .filter(icon => icon.startsWith('programBadge'))
            .map((icon, i) =>
                <tr key={i}>
                    <td>{icon}</td>
                    <td key={icon}>
                        <EbayIcon type="program-badge" name={icon} />
                    </td>
                </tr>
            )
        }
    </table>
)

export const CustomColor = () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: `.demo3 {color: blue;}` }} />
        <p>default <EbayIcon name="notification" /></p>
        <p>with className <EbayIcon name="notification" className="demo3" /></p>
        <p>with style <EbayIcon name="notification" style={{ color: 'green' }} /></p>
        <p>with style <EbayIcon name="attentionFilled" style={{ color: 'purple' }} /></p>
    </div>
)

export const CustomInitialSize = () => (
    <div>
        <p>This defines the size of the icon before the styles are loaded or when they fail to load.</p>
        <style dangerouslySetInnerHTML={{ __html: `svg.icon--cta { height: unset; width: unset; }` }} />
        <p>width/height = 8px <EbayIcon name="cta" width={8} height={8} /></p>
        <p>width/height = 32px <EbayIcon name="cta" width={32} height={32} /></p>
    </div>
)

export const Non_Decorative = () => (
    <div>
        <EbayIcon name="confirmation" a11yText="Confirmation" />
        <EbayIcon name="attention" a11yText="Confirmation" a11yVariant="label" />
    </div>
)
