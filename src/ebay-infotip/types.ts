import { CSSProperties, ReactNode } from 'react'
import { PointerDirection } from '../common/tooltip-utils'
import { Icon } from '../ebay-icon'

export type Variant = 'default' | 'modal'

export type EbayInfotipProps = {
  variant?: Variant;
  icon?: Icon;
  disabled?: boolean;
  initialExpanded?: boolean;
  pointer?: PointerDirection;
  overlayStyle?: CSSProperties;
  onExpand?: () => void;
  onCollapse?: () => void;
  a11yCloseText: string;
  'aria-label'?: string;
  className?: string;
  children?: ReactNode;
  a11yMaximizeText?:string;
  a11yMinimizeText?:string;
}
