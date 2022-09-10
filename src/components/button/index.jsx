import React from 'react'
import classNames from 'classnames'

import './Button.scss'

function MyButton({children, className}) {
  return (
    <button className={classNames('button', className)}>{children}</button>
  )
}

export default MyButton