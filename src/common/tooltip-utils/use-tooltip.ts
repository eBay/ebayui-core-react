import { useState } from 'react'

type UseTooltipArgs = {
    onExpand: () => void;
    onCollapse: () => void;
    initialExpanded?: boolean;
}

type UseTooltip = {
    isExpanded: boolean;
    expandTooltip: () => void;
    collapseTooltip: () => void;
}

export const useTooltip = ({ onExpand, onCollapse, initialExpanded = false }: UseTooltipArgs): UseTooltip => {
    const [isExpanded, setIsExpanded] = useState(initialExpanded)
    const expandTooltip = () => {
        setIsExpanded(true)
        if (onExpand) {
            onExpand()
        }
    }

    const collapseTooltip = () => {
        setIsExpanded(false)
        if (onCollapse) {
            onCollapse()
        }
    }

    return {
        isExpanded,
        expandTooltip,
        collapseTooltip
    }
}
