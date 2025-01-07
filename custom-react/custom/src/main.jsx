import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function NewApp(){
  return(
    <>
    <h5>Hello Bhai Log kaise ho sab</h5>
    </>
  )
}

// Custom Render
// so unable to render in the React coz react.render is specified for 
// specifici type of function
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit GOOOOOOGLE'
// }

const reactElement = React.createElement(
  'a',
  {href: 'https://facebook.com', target: '_blank'},
  'click me to visit Facebook'
)

const anotherElement = (
  <a href="https://google.com" target="_blank"> Kindly visit the link</a>
)

// reactElement and anotherElement and anything inside createRoot 
// React understand evrything in terms of object 
 
/*
Any JSX which is inside createRoot it React creates an object 
{ type: ,
  props:{
  },
  key: ,
  ref: 
}
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <NewApp />
   {anotherElement}
   <p />
   {reactElement}
  </StrictMode>,
)
