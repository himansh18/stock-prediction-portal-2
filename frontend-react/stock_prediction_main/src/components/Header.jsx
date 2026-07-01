import React from 'react'
import { Button } from './Button'

export const Header = () => {
  return (
    <>
    <nav className = 'navbar container pt-3 pb-3 d-flex align-items-start'>
        <a className = 'navbar-brand text-light' href = '#'>Stock Prediction</a>
        <div>
            <Button text='Login' variant='outline-info'/>
            &nbsp;
            <Button text='Register' variant='info'/>
        </div>
        </nav>
    </>
  )
}
export default Header
