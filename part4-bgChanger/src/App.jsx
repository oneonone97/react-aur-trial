            import { useState } from "react"

            function App() {
            const [color, setColor] = useState('gray');


            return (
                  <div className="w-full h-screen duration-200" 
                  style={{backgroundColor: color}}
                  >
                  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                  <div className="flex flex-wrap justify-center
                  gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

                  {/* In button we're using onClick event of JS
                  It can be initiated by two ways
                  btn onClick = eventName(type of event)
                  or
                  btn onClick = ( (eventName) => (type of event))
                  In first type we're actually passing the returning value/reference of the function which is not best
                  whereas the second type we're passing the actual function and onClick event passes function
                  so second method is correct
                  */}
                  <button
                  onClick={() => setColor('red')}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                  style={{backgroundColor: 'red'}}
                  >Red</button>

                  <button
                  onClick={() => setColor('blue')}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                  style={{backgroundColor: 'Blue'}}
                  >Blue</button>

                  <button
                  onClick={() => setColor('green')}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                  style={{backgroundColor: 'green'}}
                  >Green</button>

                  <button
                  onClick={() => setColor('yellow')}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
                  style={{backgroundColor: 'yellow'}}
                  >Yellow</button>

                  <button
                  onClick={() => setColor('purple')}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                  style={{backgroundColor: 'purple'}}
                  >Purple</button>

                  <button
                  onClick={() => setColor('black')}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                  style={{backgroundColor: 'black'}}
                  >Black</button>

                  <button
                        onClick={() => setColor('gray')}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                        style={{backgroundColor: 'gray'}}
                        >Gray</button>

                  <button
                        onClick={() => setColor('pink')}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
                        style={{backgroundColor: 'pink'}}
                        >Pink</button>

                  <button
                        onClick={() => setColor('lavender')}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
                        style={{backgroundColor: 'lavender'}}
                        >Lavender</button>

                  <button
                        onClick={() => setColor('white')}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
                        style={{backgroundColor: 'white'}}
                        >White</button>

                  <button
                        onClick={() => setColor('olive')}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                        style={{backgroundColor: 'olive'}}
                        >Olive</button>
            </div>
            </div>
            </div>
            )
            }

 export default App