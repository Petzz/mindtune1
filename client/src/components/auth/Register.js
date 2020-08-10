import React from 'react'
import { Fragment } from 'react';
//import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Fragment>
            <form>
                <input type="text" name="Name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email Address" />
                <input type="password" name="password" placeholder="Password" minLength="6" />
                <input type="password" name="password" placeholder="Confirm Password" minLength="6" />

                <input type="submit" value="register" />
            </form>
            <p>already have an account?
               sign in</p></Fragment>
    )
}

export default Register;
