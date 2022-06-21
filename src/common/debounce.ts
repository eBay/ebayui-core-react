export function debounce(fn: (any) => any, ms: number): () => void {
    let timer
    return () => {
        clearTimeout(timer)
        timer = setTimeout((...args) => {
            timer = null
            fn.apply(this, ...args)
        }, ms)
    }
}
