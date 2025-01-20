# React 

1. Created the React app by using Create React App and Vite
2. Created a custom react app. In this understood the basics how React works under the hood, how createElement works in React.
3. Created a counter app and used hooks naming useState() and it takes only two values in an array. First index is variable and second index is a function.
4. useState() second index i.e the function update the state but doesn't return the updated value directly it return undefined i.e console.log(< secondIndex of useState() >) will display undefined.
5. Hooks basically update the UI simultaneously if the changes are occuring in multiple positions.

6. When we re use multiple tiems a hook we need to optimize and one famous method is useCallback() because it cache a function between re renders means cache a function just like browser cache and re use it whenever it's required.

## JSX Creates an object
Any JSX which is inside createRoot it React creates an object 
{ type: ,
  props:{
  },
  key: ,
  ref: 
}

