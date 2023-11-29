import '@testing-library/jest-dom'

declare var global: typeof globalThis;

if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: () => {} });
}
