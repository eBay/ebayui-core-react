import{r as o}from"./index-CBqU2yxZ.js";import"./array.polyfill.flat-B3WuOdLl.js";function f(e=[],t){return o.Children.toArray(e).find(({type:n})=>n===t)||null}function a(e=[],t){return o.Children.toArray(e).filter(({type:n})=>n!==t)}function c(e=[],t){const r=o.Children.toArray(e),n=[t].flat();return r.filter(({type:l})=>n.includes(l))}function m(e=[],t){return o.Children.toArray(e).filter(t)}export{c as a,m as b,a as e,f};
