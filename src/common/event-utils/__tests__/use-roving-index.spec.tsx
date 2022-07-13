import React, { FC } from 'react'
import { act, renderHook } from '@testing-library/react-hooks'
import { fireEvent } from '@testing-library/react'
import useRovingIndex from '../use-roving-index'

const TestComponent: FC = () => <div />

const children = [
    <div />,
    <TestComponent />,
    <TestComponent />,
    <div />
]

describe('useRovingIndex', () => {
    it('should return undefined by default', () => {
        const { result } = renderHook(() => useRovingIndex(children, TestComponent))

        expect(result.current[0]).toBeUndefined()
        expect(typeof result.current[1]).toEqual('function')
    })

    it('should update index', () => {
        const { result } = renderHook(() => useRovingIndex(children, TestComponent))

        act(() => {
            result.current[1](0)
        })

        expect(result.current[0]).toEqual(0)
    })

    it('should ignore non-focusable elements', () => {
        const { result, rerender } = renderHook(() => useRovingIndex(children, TestComponent))

        act(() => {
            result.current[1](0)
        })
        rerender()

        act(() => {
            fireEvent.keyDown(window, { key: 'ArrowDown' })
        })
        expect(result.current[0]).toEqual(0)
        rerender()

        act(() => {
            fireEvent.keyDown(window, { key: 'ArrowDown' })
        })

        expect(result.current[0]).toEqual(0)
    })

    it('should update index on keyDown', () => {
        const { result, rerender } = renderHook(() => useRovingIndex(children, TestComponent))

        act(() => {
            result.current[1](1)
        })
        rerender()

        act(() => {
            fireEvent.keyDown(window, { key: 'ArrowDown' })
        })
        expect(result.current[0]).toEqual(2)

    })

    it('should update index on keyDown', () => {
        const { result, rerender } = renderHook(() => useRovingIndex(children, TestComponent))

        act(() => {
            result.current[1](2)
        })
        rerender()

        act(() => {
            fireEvent.keyDown(window, { key: 'ArrowUp' })
        })
        expect(result.current[0]).toEqual(1)
    })
})
