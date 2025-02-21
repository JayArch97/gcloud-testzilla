import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById("root")!)

function TestingTailwind() {  
  return(
  <>  
  <h1 className='text-3xl font-bold underline'>This is a test to see how things run</h1>
  <p className='text-md text-gray-500 border-b border-gray-200'>This is a just a test with a p tag to make sure that all of the tailwind css works</p>
  </>)
}

root.render(
  <StrictMode><TestingTailwind/></StrictMode>
)


