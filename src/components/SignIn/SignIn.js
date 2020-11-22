import React from "react"
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="fullview">
            <form className='signincontainer'>
                <div className="menucontainer">
                    <h1>
                        <div className='signinblue'>Sign In</div>
                        <div className='signupbuttoncontainer'>
                            <div className='signup'>Sign Up</div>
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