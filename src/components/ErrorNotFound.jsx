import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ErrorNotFound = () => {
  return (

    <div className='container-fluid  page-not-found'>
        <div className='page-child'>
            <div className="child1">
                <h1 className='display-1 text-muted'>404</h1>
            </div>
    <h1 className='text-muted'>PAGE NOT FOUND</h1>

        <NavLink to={`/`}>
            <Button className='bt-css2'>
                Home-Page
            </Button>
        </NavLink>
        </div>
    </div>
  )
}

export default ErrorNotFound