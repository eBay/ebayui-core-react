import React, { Children, FC, ReactElement } from 'react'
import classNames from 'classnames'
import { EbayIcon, Icon } from '../ebay-icon'
import { StepState, StepType } from './types'
import { EbayProgressTitle } from './index'

export type EbayProgressStepProps = {
    type?: StepType;
    state?: StepState;
    current?: boolean;
    number?: number;
    className?: string;
}

const typeClasses: { [key in StepType]: string } = {
    attention: 'progress-stepper__item--attention',
    information: 'progress-stepper__item--information',
    complete: 'progress-stepper__item--confirmation'
}

const typeIcons: { [key in StepType]: Icon } = {
    complete: 'stepperConfirmation',
    information: 'informationFilled',
    attention: 'attentionFilled'
}

const EbayProgressStep: FC<EbayProgressStepProps> = ({
    type,
    current,
    state,
    /**
     * @deprecated Don't use number in v9+ (Skin 13+), left for backward-compatibility. TODO: remove in v10.
     */
    number,
    children,
    className,
    ...rest
}) => {
    const childrenArray = Children.toArray(children)
    const title = childrenArray.find((child: ReactElement) => child.type === EbayProgressTitle)
    const text = childrenArray.filter((child: ReactElement) => child.type !== EbayProgressTitle)
    const stepClassNames = classNames(
        className,
        'progress-stepper__item',
        typeClasses[type],
        { 'progress-stepper__item--current': current }
    )
    const ariaLabel = number === undefined ? state : number.toString()
    const content: number | null = number === undefined ? null : number
    const icon = typeIcons[type]

    return (
        <div
            {...rest}
            className={stepClassNames}
            role="listitem"
            aria-current={current ? 'step' : undefined}
        >
            <div className="progress-stepper__icon">
                {icon ?
                    <EbayIcon name={icon} height="24" width="24" /> :
                    <span role="img" aria-label={ariaLabel}>{content}</span>
                }

            </div>

            <div className="progress-stepper__text">
                {title}
                {text}
            </div>
        </div>
    )
}

export default EbayProgressStep
