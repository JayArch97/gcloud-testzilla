import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'

const root = createRoot(document.getElementById('root')!)

type Props = {
  name?: string;
  buttonComponent? : any
  isSmallText? : boolean
  }
  
  const Header = ({name, buttonComponent, isSmallText}: Props) => {
    return (
      <div className='mb-5 flex w-full items-center justify-between color: #000'>
        <h1 className={`${isSmallText? "text-lg" : "text-2xl"} font-semibold text-black` }>
          {name}
        </h1>
        {buttonComponent}
      </div>
    )
  }
root.render(
  <StrictMode>
    <Header />
  </StrictMode>
)
