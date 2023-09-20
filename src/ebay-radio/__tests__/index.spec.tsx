import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots';
import { EbayRadio } from '../index';
import { EbayLabel } from '../../ebay-field'

initStoryshots({
    config: ({ configure }) =>
        configure(() => {require('./index.stories')}, module),
    storyNameRegex: /^((?!.*?controlled).)*$/i // all stories except the Controlled ones
})

var anySyntheticEvent = expect.objectContaining({ type: null });

describe('<EbayRadio>', () => {
    describe('on radio-button click', () => {
        it('should fire onChange event', () => {
            const value = 'test'
            const spy = jest.fn()
            render(<EbayRadio value={value} onChange={spy} id="id">
                <EbayLabel>radio</EbayLabel>
            </EbayRadio>)
            fireEvent.click(screen.getByLabelText('radio'))

            expect(spy).toBeCalledWith(anySyntheticEvent, { value })
        })
        it('should fire onFocus event', () => {
            const value = 'test'
            const spy = jest.fn()
            render(<EbayRadio value={value} onFocus={spy} id="id">
                <EbayLabel>radio</EbayLabel>
            </EbayRadio>)
            fireEvent.focus(screen.getByLabelText('radio'))

            expect(spy).toBeCalledWith(anySyntheticEvent, { value })
        })
    })
    describe('on radio-button key down', () => {
        it('should fire onKeyDown event', () => {
            const value = 'test'
            const spy = jest.fn()
            render(<EbayRadio value={value} onKeyDown={spy} id="id">
                <EbayLabel>radio</EbayLabel>
            </EbayRadio>)
            fireEvent.keyDown(screen.getByLabelText('radio'))

            expect(spy).toBeCalledWith(anySyntheticEvent, { value })
        })
    })
})
