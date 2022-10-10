import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import { snapshotWithOptions } from '@storybook/addon-storyshots'
import { initStoryshots } from '../../../config/jest/storyshots';
import { EbayPagination, EbayPaginationItem as Item } from '../index'

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: node => node,
  };
});

describe('<EbayPagination>', () => {
    describe('on page click', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayPagination onSelect={spy}>
                    <Item type="previous" href="#" />
                    <Item href="#">1</Item>
                    <Item href="#">2</Item>
                    <Item href="#">3</Item>
                    <Item href="#">4</Item>
                    <Item href="#">5</Item>
                    <Item current href="#">6</Item>
                    <Item disabled type="next" href="#" />
                </EbayPagination>
            )
            fireEvent.click(wrapper.getAllByRole('link')[1])

            expect(spy).toBeCalled()
        })
    })

    describe('on click handler', () => {
        let wrapper
        let spyOnPrev
        let spyOnNext
        let spyOnSelect

        beforeEach(() => {
            spyOnPrev = jest.fn()
            spyOnNext = jest.fn()
            spyOnSelect = jest.fn()
            wrapper = render(
                <EbayPagination onPrevious={spyOnPrev} onNext={spyOnNext} onSelect={spyOnSelect}>
                    <Item type="previous" href="#" />
                    <Item href="#">1</Item>
                    <Item href="#">2</Item>
                    <Item href="#" current>3</Item>
                    <Item href="#">4</Item>
                    <Item href="#">5</Item>
                    <Item href="#">6</Item>
                    <Item type="next" href="#" />
                </EbayPagination>
            )
        })

        it('should trigger onPrevious() on clicking prev arrow', () => {
            fireEvent.click(wrapper.getByLabelText('Previous page'))

            expect(spyOnSelect).not.toBeCalled()
            expect(spyOnPrev).toBeCalled()
            expect(spyOnNext).not.toBeCalled()
        })

        it('should trigger onNext() on clicking next arrow', () => {
            fireEvent.click(wrapper.getByLabelText('Next page'))

            expect(spyOnSelect).not.toBeCalled()
            expect(spyOnPrev).not.toBeCalled()
            expect(spyOnNext).toBeCalled()
        })

        it('should trigger onSelect() on clicking pagination item', () => {
            fireEvent.click(wrapper.getAllByRole('link')[1])

            expect(spyOnSelect).toBeCalledWith(expect.anything(), undefined, 2)
            expect(spyOnPrev).not.toBeCalled()
            expect(spyOnNext).not.toBeCalled()
        })
    })

    describe('on page resize', () => {
        it('should hide some pagination items when the layout space is too narrow so the selected item is always visible on the center', async () => {
            const wrapper = render(
                <EbayPagination >
                    <Item type="previous" href="#" />
                    <Item href="#">1</Item>
                    <Item href="#">2</Item>
                    <Item href="#">3</Item>
                    <Item href="#">4</Item>
                    <Item href="#">5</Item>
                    <Item current href="#">6</Item>
                    <Item href="#">7</Item>
                    <Item href="#">8</Item>
                    <Item href="#">9</Item>
                    <Item type="next" href="#" />
                </EbayPagination>
            )
            resizeWindow(500, 300)
            expect(wrapper.container.querySelectorAll('li')[1]).toHaveAttribute('hidden', '')
        })

        it('should not hide any elements when all items are visible on given narrow space', () => {
            const wrapper = render(
                <EbayPagination >
                    <Item type="previous" href="#" />
                    <Item href="#">5</Item>
                    <Item current href="#">6</Item>
                    <Item href="#">7</Item>
                    <Item type="next" href="#" />
                </EbayPagination>
            )
            resizeWindow(500, 300)
            expect(wrapper.container.querySelectorAll('li')[1]).not.toHaveAttribute('hidden')
        })
    })
})


initStoryshots({
    test: snapshotWithOptions({
        createNodeMock: (element) => document.createElement(element.type)
    }),
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

function resizeWindow(x, y) {
    // todo: fix this
    // this thing doesn't affect any elements rendered by JSDOM
    // global.window.innerWidth = x
    // global.window.innerHeight = y
    global.window.dispatchEvent(new Event('resize'))
}
