import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayPagination, EbayPaginationItem as Item } from '../index'
import { EbayButton } from '../../ebay-button';
import { EbayLightboxDialog } from '../../ebay-lightbox-dialog';

storiesOf('ebay-pagination', module)
    .add('Basic links', () => (<>
        <EbayPagination
            a11yPreviousText="Previous page"
            a11yNextText="Next page"
            a11yCurrentText="Results Pagination - Page 1"
            onPrevious={action('onPaginationPrevious')}
            onNext={action('onPaginationNext')}
            onSelect={action('onPageSelect')}
        >
            <Item type="previous" disabled href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=5" />
            <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=1" current>1</Item>
            <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=2">2</Item>
            <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=3">3</Item>
            <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=4">4</Item>
            <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=5">5</Item>
            <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=6">6</Item>
            <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=7">7</Item>
            <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=8">8</Item>
            <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=9">9</Item>
            <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=10" type="next" />
        </EbayPagination>
    </>))
    .add('Arrows disabled', () => (<>
        <EbayPagination>
            <Item disabled type="previous" href="#" />
            <Item current type="page" href="#">1</Item>
            <Item disabled type="next" href="#" />
        </EbayPagination>
    </>))
    .add('Buttons', () => (<>
        <EbayPagination
            onPrevious={action('onPaginationPrevious')}
            onNext={action('onPaginationNext')}
            onSelect={action('onPageSelect')}
        >
            <Item type="previous" />
            <Item>1</Item>
            <Item current>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
            <Item>7</Item>
            <Item>8</Item>
            <Item>9</Item>
            <Item type="next" />
        </EbayPagination>
    </>))
    .add('Buttons interactive (click to change active page)', () => {
        const InteractivePaginationButtons = ({ numOfItems, firstPage= 1 }) => {
            const [activeIndex, setActiveIndex] = useState(0)
            const handlePrev = () => {
                const newIndex = Math.max(activeIndex - 1, 0);
                setActiveIndex(newIndex)
                action('Select previous')(newIndex + firstPage)
            }
            const handleNext = () => {
                const newIndex = Math.min(activeIndex + 1, numOfItems);
                setActiveIndex(newIndex)
                action('Select next')(newIndex + firstPage)
            }
            const handleSelect = (_, __, pageIndex) => {
                setActiveIndex(pageIndex)
                action('Select page')(pageIndex + firstPage)
            }

            return (
                <EbayPagination
                    a11yCurrentText={`Results Pagination - Page ${firstPage + activeIndex}`}
                    onPrevious={handlePrev}
                    onNext={handleNext}
                    onSelect={handleSelect as any}
                >
                    <Item type="previous" disabled={activeIndex === 0} />
                    {Array.from(Array(numOfItems).keys()).map(i => (
                        <Item key={`item-${i}`} current={i === activeIndex}>{firstPage + i}</Item>
                    ))}
                    <Item type="next" disabled={activeIndex >= (numOfItems  - 1)} />
                </EbayPagination>
            )
        }

        return <>
            <div><InteractivePaginationButtons numOfItems={15} /></div>
            <div><InteractivePaginationButtons numOfItems={5} firstPage={6} /></div>
        </>
    })
    .add('Variant `showLast` (interactive)', () => {
        const InteractivePagination = ({ numOfItems }) => {
            const [activeIndex, setActiveIndex] = useState(0)
            const handlePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0))
            const handleNext = () => setActiveIndex(Math.min(activeIndex + 1, numOfItems))
            const handleSelect = (_, value) => setActiveIndex(parseInt(value, 10) - 1)

            return (
                <EbayPagination
                    a11yCurrentText={`Results Pagination - Page ${activeIndex + 1}`}
                    onPrevious={handlePrev}
                    onNext={handleNext}
                    onSelect={handleSelect as any}
                    variant="show-last"
                >
                    <Item type="previous" disabled={activeIndex === 0} />
                    {Array.from(Array(numOfItems).keys()).map(i => (
                        <Item key={`item-${i}`} current={i === activeIndex}>{i + 1}</Item>
                    ))}
                    <Item type="next" disabled={activeIndex >= (numOfItems - 1)} />
                </EbayPagination>
            )
        }

        return <><InteractivePagination numOfItems={15} /></>
    })
    .add('Variant `overflow` (interactive)', () => {
        const InteractivePagination = ({ numOfItems }) => {
            const [activeIndex, setActiveIndex] = useState(0)
            const handlePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0))
            const handleNext = () => setActiveIndex(Math.min(activeIndex + 1, numOfItems))
            const handleSelect = (_, value) => setActiveIndex(parseInt(value, 10) - 1)

            return (
                <EbayPagination
                    a11yCurrentText={`Results Pagination - Page ${activeIndex + 1}`}
                    onPrevious={handlePrev}
                    onNext={handleNext}
                    onSelect={handleSelect as any}
                    variant="overflow"
                >
                    <Item type="previous" disabled={activeIndex === 0} />
                    {Array.from(Array(numOfItems).keys()).map(i => (
                        <Item key={`item-${i}`} href="" current={i === activeIndex}>{i + 1}</Item>
                    ))}
                    <Item type="next" disabled={activeIndex >= (numOfItems - 1)} />
                </EbayPagination>
            )
        }

        return <>
            <InteractivePagination numOfItems={5} />
            <InteractivePagination numOfItems={9} />
            <InteractivePagination numOfItems={10} />
            <InteractivePagination numOfItems={15} />
            <InteractivePagination numOfItems={35} />
        </>
    })
    .add('Fluid', () => (
        <>
            <h2>Default fluid</h2>
            <EbayPagination
                fluid
                onPrevious={action('onPaginationPrevious')}
                onNext={action('onPaginationNext')}
                onSelect={action('onPageSelect')}
            >
                <Item type="previous" />
                <Item>1</Item>
                <Item current>2</Item>
                <Item>3</Item>
                <Item>4</Item>
                <Item>5</Item>
                <Item>6</Item>
                <Item>7</Item>
                <Item>8</Item>
                <Item>9</Item>
                <Item>10</Item>
                <Item>11</Item>
                <Item>12</Item>
                <Item>13</Item>
                <Item type="next" />
            </EbayPagination>

            <h2>Fluid with dots</h2>
            <EbayPagination
                variant="show-last"
                fluid
                onPrevious={action('onPaginationPrevious')}
                onNext={action('onPaginationNext')}
                onSelect={action('onPageSelect')}
            >
                <Item type="previous" />
                <Item>1</Item>
                <Item current>2</Item>
                <Item>3</Item>
                <Item>4</Item>
                <Item>5</Item>
                <Item>6</Item>
                <Item>7</Item>
                <Item>8</Item>
                <Item>9</Item>
                <Item>10</Item>
                <Item>11</Item>
                <Item>12</Item>
                <Item>13</Item>
                <Item type="next" />
            </EbayPagination>
        </>
    ))
    .add('Inside a dialog', () => {
        const InteractivePagination = ({ numOfItems }) => {
            const [activeIndex, setActiveIndex] = useState(0)
            const [open, setOpen] = useState(false)
            const handlePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0))
            const handleNext = () => setActiveIndex(Math.min(activeIndex + 1, numOfItems))
            const handleSelect = (_, __, index) => setActiveIndex(index)

            return (
                <>
                    <EbayButton onClick={() => setOpen(true)}>Show pagination dialog</EbayButton>
                    <EbayLightboxDialog open={open}>
                        <EbayPagination
                            a11yCurrentText={`Results Pagination - Page ${activeIndex + 1}`}
                            onPrevious={handlePrev}
                            onNext={handleNext}
                            onSelect={handleSelect}
                        >
                            <Item type="previous" disabled={activeIndex === 0} />
                            {Array.from(Array(numOfItems).keys()).map(i => (
                                <Item key={`item-${i}`} current={i === activeIndex}>{i + 1}</Item>
                            ))}
                            <Item type="next" disabled={activeIndex >= (numOfItems - 1)} />
                        </EbayPagination>
                    </EbayLightboxDialog>
                </>
            )
        }

        return <><InteractivePagination numOfItems={5} /></>
    })
