import React from 'react'
import './App.css'
import Example2 from './components/example2/Example2'
import Example1 from './components/Example1/Example1'
import Example3 from './components/example3/Example3'
import Example4 from './components/example4/Example4'
import Example5 from './components/example5/Example5'
import Example6 from './components/example6/Example6'
import Example7 from './components/example7/Example7'
import Example8 from './components/example8/Example8'
import Example9 from './components/example9/Example9'

const data = [
  {
    name:'Arun hdhhhhhhhhhhhhhhhhhhhhhhhhhh',
    number:'+91833939393'
  },
  {
    name:'Mohan',
    number:'+91833939393'
  },
  {
    name:'Anvar',
    number:'+91833939393'
  },
  {
    name:'kiran',
    number:'+91833939393'
  },
  {
    name:'Arun hdhhhhhhhhhhhhhhhhhhhhhhhhhh',
    number:'+91833939393'
  },
]

function App() {
  return (
    <div>
    
      {/* <Example5/> */}
      {/* <Example6 title="this is the title from app.js to example6" firstnumber={100} secondnumber={200} text='this is the primary button' btn='btn-primary'/>

      <Example6 title="this is the title from app.js to example6" firstnumber={300} secondnumber={200} text='this is the danger outline button' btn='btn-outline-danger'/> */}

      {/* <Example7 firstname="Arun" secondname="kumar" email="kumar@gmail.com" phone="+9187663733"/> */}

      {/* <Example8/> */}
      <Example9/>
    </div>
  )
}

export default App