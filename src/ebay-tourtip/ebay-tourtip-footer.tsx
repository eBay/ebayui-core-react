import { FC, ComponentProps } from 'react'

/**
 * This Component is used only for finding it as a child of EbayTooltip
 * and pass the properties to TooltipHost
*/
type TourtipFooterProps = ComponentProps<'div'> & {
    type?: string;
    displayPagination?: boolean;
    footerIndex?: string;
}
const EbayTourtipFooter: FC<TourtipFooterProps> = () => null

export default EbayTourtipFooter
