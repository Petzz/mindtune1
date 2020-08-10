import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <h1>Landing page</h1>
            <Link to='/Login'>Login</Link>
            <Link to='/Register'>Register</Link>
        </div>
    )
}
export default Landing;
