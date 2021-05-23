import React from "react"
import './SignIn.css';
import {Link} from "react-router-dom"

const SignIn = () => {
    return (
        <div className="fullview">
            <form className='signincontainer'>
                <div className="menucontainer">
                    <h1>
                        <div className='signinblue'>Sign In</div>
                        <div className='signupbuttoncontainer'>
                            <Link to="/signup" className='signup'>Sign Up</Link>
                        </div>
                    </h1>
                </div>
                <div className='dataformcontainer'>
                    <h2>
                    Email
                    </h2>
                    <input type="text" name="name" />
                </div>
                <div className='dataformcontainer'>
                    <h2>
                    Password
                    </h2>
                    <input type="text" name="name" />
                </div>
            </form>
            <div className='createaccountcontainer'>
                <div className='buttoncontainer'>
                    <button className='createaccountbutton'>Create Account</button>
                </div>
                </div>
            </div>
    )
}

export default SignIn