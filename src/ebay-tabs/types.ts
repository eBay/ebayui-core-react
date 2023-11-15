import { ComponentProps } from 'react'

export type Activation = 'auto' | 'manual'
export type Size = 'medium' | 'large'

export type OnSelectProps = {
  selectedIndex: number;
}

export type TabsProps = ComponentProps<'div'> & {
  index?: number;
  size?: Size;
  activation?: Activation;
  onSelect?: (props: OnSelectProps) => void;
  /**
   * @deprecated Use onSelect instead
   */
  onTabSelect?: (index: number) => void;
}
