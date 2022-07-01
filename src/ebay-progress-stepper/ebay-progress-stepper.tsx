import React, { Children, cloneElement, FC, Fragment, ReactElement, ReactNode } from 'react'
import classNames from 'classnames'
import { StepperDirection, StepState, StepType } from './types'
import { EbayProgressStepProps } from './ebay-progress-step'

type ProgressStepperProps = {
    direction?: StepperDirection;
    defaultState?: StepState;
    className?: string;
    children?: ReactNode;
}

const EbayProgressStepper: FC<ProgressStepperProps> = ({
    direction = 'row',
    defaultState = 'active',
    children,
    className,
    ...rest
}) => {
    const childrenArray = Children.toArray(children)
    const currentIndex = childrenArray.findIndex((child: ReactElement) => child.props.current)

    return (
        <div
            {...rest}
            className={classNames(className, 'progress-stepper', {
                'progress-stepper--vertical': direction === 'column'
            })}
        >
            <div
                role="list"
                className={classNames('progress-stepper__items', {
                    'progress-stepper__items--upcoming': defaultState === 'upcoming'
                })}
            >
                {childrenArray.map((child: ReactElement, index) => {
                    const currentState = stepState(index, currentIndex)
                    const stepTypes: { [keys in StepState]: StepType } = {
                        complete: 'complete',
                        active: currentState === 'complete' ? 'complete' : undefined,
                        upcoming: undefined
                    }

                    return (
                        <Fragment key={index}>
                            {index > 0 && <hr className="progress-stepper__separator" role="presentation" />}
                            {cloneElement<EbayProgressStepProps>(child, {
                                type: stepTypes[defaultState],
                                state: currentState,
                                ...child.props
                            })}
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

function stepState(stepIndex, currentIndex): StepState {
    if (stepIndex < currentIndex) return 'complete'
    if (stepIndex > currentIndex) return 'upcoming'
    return 'active'
}

export default EbayProgressStepper
