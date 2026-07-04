import React from 'react'
import {Link} from 'react-router-dom'

const Button = (props) => {
  return (
    // we are usinng 
    <Link className={`btn ${props.class}`} to={props.url}>
      {props.text}
    </Link>
  )
}
export default Button
