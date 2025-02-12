import{a as p}from"./index-Zi3BSDNR.js";import{r as u}from"./index-CBqU2yxZ.js";const l=e=>e.displayName||e.name||"Component",s=e=>{const n=u.forwardRef((t,a)=>p(e,{...t,forwardedRef:a}));return n.displayName=l(e),n};try{s.displayName="withForwardRef",s.__docgenInfo={description:"",displayName:"withForwardRef",props:{propTypes:{defaultValue:null,description:`Used to declare the types of the props accepted by the
component. These types will be checked during rendering
and in development only.

We recommend using TypeScript instead of checking prop
types at runtime.
@see {@link https://react.dev/reference/react/Component#static-proptypes React Docs}`,name:"propTypes",required:!1,type:{name:"WeakValidationMap<Props>"}},contextTypes:{defaultValue:null,description:`@deprecated Lets you specify which legacy context is consumed by
this component.
@see {@link https://legacy.reactjs.org/docs/legacy-context.html Legacy React Docs}`,name:"contextTypes",required:!1,type:{name:"ValidationMap<any>"}},defaultProps:{defaultValue:null,description:`Used to define default values for the props accepted by
the component.
@see {@link https://react.dev/reference/react/Component#static-defaultprops React Docs}
@example \`\`\`tsx
type Props = { name?: string }

const MyComponent: FC<Props> = (props) => {
  return <div>{props.name}</div>
}

MyComponent.defaultProps = {
  name: 'John Doe'
}
\`\`\``,name:"defaultProps",required:!1,type:{name:"Partial<Props>"}},displayName:{defaultValue:null,description:`Used in debugging messages. You might want to set it
explicitly if you want to display a different name for
debugging purposes.
@see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
@example \`\`\`tsx

const MyComponent: FC = () => {
  return <div>Hello!</div>
}

MyComponent.displayName = 'MyAwesomeComponent'
\`\`\``,name:"displayName",required:!1,type:{name:"string"}},apply:{defaultValue:null,description:`Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
@param thisArg The object to be used as the this object.
@param argArray A set of arguments to be passed to the function.`,name:"apply",required:!0,type:{name:"(this: Function, thisArg: any, argArray?: any) => any"}},call:{defaultValue:null,description:`Calls a method of an object, substituting another object for the current object.
@param thisArg The object to be used as the current object.
@param argArray A list of arguments to be passed to the method.`,name:"call",required:!0,type:{name:"(this: Function, thisArg: any, ...argArray: any[]) => any"}},bind:{defaultValue:null,description:`For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.
@param thisArg An object to which the this keyword can refer inside the new function.
@param argArray A list of arguments to be passed to the new function.`,name:"bind",required:!0,type:{name:"(this: Function, thisArg: any, ...argArray: any[]) => any"}},toString:{defaultValue:null,description:"Returns a string representation of a function.",name:"toString",required:!1,type:{name:"() => string"}},prototype:{defaultValue:null,description:"",name:"prototype",required:!0,type:{name:"any"}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"number"}},arguments:{defaultValue:null,description:"",name:"arguments",required:!0,type:{name:"any"}},caller:{defaultValue:null,description:"",name:"caller",required:!0,type:{name:"Function"}},name:{defaultValue:null,description:"Returns the name of the function. Function names are read-only and can not be changed.",name:"name",required:!0,type:{name:"string"}},"__@hasInstance@6075":{defaultValue:null,description:`Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.`,name:"__@hasInstance@6075",required:!0,type:{name:"(value: any) => boolean"}}}}}catch{}Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,writable:!0,value:function(e){const n=typeof e>"u"?1:Number(e)||0,t=[],a=t.forEach,o=(c,i)=>a.call(c,r=>{i>0&&Array.isArray(r)?o(r,i-1):t.push(r)});return o(this,n),t}});export{s as w};
