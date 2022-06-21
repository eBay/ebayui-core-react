export interface Global extends NodeJS.Global {
  document: Document;
  window: Window;
}

declare var global: Global;

if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: () => {} });
}
