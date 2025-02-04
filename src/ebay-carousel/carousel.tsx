import React, { Children, ComponentProps, FC, SyntheticEvent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import CarouselControlButton from './carousel-control-button'
import CarouselList from './carousel-list'
import { ListItemRef } from './types'
import { getMaxOffset, getNextIndex, getOffset, getSlide } from './helpers'
import { debounce } from '../common/debounce'
import { EbayIcon } from '../ebay-icon'

export type CarouselProps = ComponentProps<'div'> & {
    className?: string;
    gap?: number;
    index?: number; // Scroll to index slide
    imageTreatment?: boolean; // Image slide?
    itemsPerSlide?: number; // number of slides to be displayed
    a11yPreviousText?: string;
    a11yNextText?: string;
    a11yPauseText?: string;
    a11yPlayText?: string;
    autoplay?: boolean | number;
    onNext?: (event: React.SyntheticEvent) => void;
    onPrevious?: (event: React.SyntheticEvent) => void;
    onScroll?: ({ index }) => void;
    onSlide?: ({ slide }) => void;
    onPlay?: (event: React.SyntheticEvent) => void
    onPause?: (event: React.SyntheticEvent) => void
};

// TO-DO:
// Image slides
// Auto play (+ onPlay/onPause callbacks)

const EbayCarousel: FC<CarouselProps> = ({
    gap = 16,
    index = 0,
    itemsPerSlide: _itemsPerSlide,
    a11yPreviousText,
    a11yNextText,
    a11yPauseText,
    a11yPlayText,
    autoplay,
    onScroll = () => {},
    onNext = () => {},
    onPrevious = () => {},
    onSlide = () => {},
    onPlay = () => {},
    onPause = () => {},
    className,
    children,
    ...rest
}) => {
    const [activeIndex, setActiveIndex] = useState(index)
    const [slideWidth, setSlideWidth] = useState(0)
    const [offset, setOffset] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const itemsRef = useRef<Array<ListItemRef | null>>([])
    const itemCount = Children.count(children)
    const itemsPerSlide = Math.floor(_itemsPerSlide) || undefined
    const isSingleSlide = itemCount <= itemsPerSlide
    const prevControlDisabled = isSingleSlide || offset === 0
    const nextControlDisabled =
        isSingleSlide || (offset === getMaxOffset(itemsRef.current, slideWidth))

    const handleResize = () => {
        if (!containerRef.current) return

        const { width: containerWidth } = containerRef.current.getBoundingClientRect()
        setSlideWidth(containerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', debounce(handleResize, 16))

        return () => {
            window.removeEventListener('resize', debounce(handleResize, 16))
        }
    }, [])

    useEffect(() => {
        setOffset(getOffset(itemsRef.current, activeIndex, slideWidth))
    }, [activeIndex, slideWidth])

    useEffect(() => {
        if (index >= 0 && index <= itemCount - 1) {
            setActiveIndex(index)
        }
    }, [index])

    useEffect(() => {
        itemsRef.current = itemsRef.current.splice(0, itemCount)
    }, [children])

    useEffect(() => {
        const { width: containerWidth } = containerRef.current.getBoundingClientRect()
        setSlideWidth(containerWidth)
    }, [containerRef.current])

    const [paused, setPaused] = useState(false)
    useEffect(() => {
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        setPaused(isReducedMotion)
    }, [])

    const togglePlayback = (event) => {
        setPaused(!paused)
        if (paused) {
            onPlay(event)
        } else {
            onPause(event)
        }
    }

    const updateActiveIndex = (direction, itemsToShow) => {
        setActiveIndex((prevIndex) => {
            const nextIndex = getNextIndex(
                direction, prevIndex, itemsRef.current, slideWidth, itemsToShow)
            const slide = getSlide(prevIndex, itemsToShow, nextIndex)
            onSlide({ slide })
            return nextIndex
        })
    }

    const autoplayTimeout = typeof autoplay === 'number' ? autoplay : 4000
    const isAutoplayEnabled =
        typeof autoplay === 'boolean' ? autoplay : typeof autoplay === 'number'

    useEffect(() => {
        if (!isAutoplayEnabled || paused) {
            return
        }

        const interval = setInterval(() => {
            updateActiveIndex('RIGHT', itemsPerSlide)
        }, autoplayTimeout)

        return () => clearInterval(interval)
    }, [isAutoplayEnabled, paused, itemsPerSlide])

    const handleControlClick = (event: SyntheticEvent<HTMLButtonElement>, { direction }) => {
        updateActiveIndex(direction, itemsPerSlide)

        if (direction === 'LEFT') {
            onPrevious(event)
        } else {
            onNext(event)
        }
    }

    return (
        <div
            className={classNames('carousel', className,
                {
                    'carousel--slides': itemsPerSlide,
                    'carousel--peek': itemsPerSlide % 1 === 0,
                    'carousel__autoplay': isAutoplayEnabled
                })}
            {...rest}>
            <div ref={containerRef} className="carousel__container">
                <CarouselControlButton
                    label={a11yPreviousText}
                    type="prev"
                    disabled={prevControlDisabled}
                    onClick={handleControlClick} />
                <CarouselList
                    itemsRef={itemsRef}
                    offset={offset}
                    gap={gap}
                    itemsPerSlide={itemsPerSlide}
                    nextControlDisabled={nextControlDisabled}
                    isAutoplayEnabled={isAutoplayEnabled}
                    activeIndex={activeIndex}
                    onScroll={onScroll}
                    onSetActiveIndex={setActiveIndex}
                    slideWidth={slideWidth}>
                    {children}
                </CarouselList>
                <CarouselControlButton
                    type="next"
                    label={a11yNextText}
                    disabled={nextControlDisabled}
                    onClick={handleControlClick} />

                {isAutoplayEnabled ? (
                    <button
                        className="carousel__playback"
                        type="button"
                        onClick={togglePlayback}
                        aria-label={paused ? a11yPlayText : a11yPauseText}>
                        <EbayIcon name={paused ? 'play24' : 'pause24'} />
                    </button>
                ) : null}
            </div>
        </div>
    )
}

export default EbayCarousel
