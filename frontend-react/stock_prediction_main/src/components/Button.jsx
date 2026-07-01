import React from 'react'

export const Button = ({ text, variant = 'outline-info' }) => {
  return (
    <a className={`btn btn-${variant}`} href='#'>{text}</a>
  )
}
export default Button
