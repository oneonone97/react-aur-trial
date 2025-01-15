import Cards from './components/Cards'
import Card from './components/Card'
import './App.css'

function App() {
  
  let proper = {
    name: 'Rohan',
    age: 27
  }

  let array = [1,2,3,4,5,6];

  // Destructring Objects

  let newArray = [10,20,30,40,50,60,70]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>
      Tailwind CSS
    </h1>
    <Cards channel ='chai' info = {proper} arr = {array} />
    <Cards details = {proper} detArray = {array} />
    {/* <Card new = {newArray} userName = 'Rohan'/> */}

    {/* For reusablity of component we use props
      here two card are imported but we want to show the different information
      in each card so here comes the concept of props aka property where we can 
      change the specified content in the card.   
      Every function has an access of props 
      Props loads the value which ever is given in the component
      You can't pass multiple value in it until you create a new variable and then the value gets passed
      You can pass value from one component to another component
      Props is basically a object and can be accesed by using .property 
      Props can have use object destructring 
      While destructring you need to handle the props also
      In case the props are not passed and have readibilty issue 
      pass the default value in the props
    */}


    
  


 </>
  )
}

export default App
