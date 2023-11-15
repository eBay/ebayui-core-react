export const debounce =
  <F extends (...args: Parameters<F>) => ReturnType<F>>(fn: F, ms: number): (...args: Parameters<F>) => void => {
      let timer: ReturnType<typeof setTimeout>

      return (...args: Parameters<F>) => {
          clearTimeout(timer)
          timer = setTimeout(() => fn(...args), ms)
      }
  }
