import React from "react"
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="fullview">
            <form className='formcontainer'>
                <div className="menucontainer">
                    <h1>
                        <div className='signin'>Sign In</div>
                        <div className='signupblue'>Sign Up</div>
                    </h1>
                </div>
                <div className='datacontainer'>
                    <h2>
                    Name
                    </h2>
                    <input type="text" name="name" />
                </div>
                <div className='datacontainer'>
                    <h2>
                    Email
                    </h2>
                    <input type="text" name="name" />
                </div>
                <div className='datacontainer'>
                    <h2>
                    Password
                    </h2>
                    <input type="text" name="name" />
                </div>
                <div className='datacontainer'>
                    <h2>
                    Date of Birth
                    </h2>
                    <input type="text" name="name" />
                </div>
                <div className='datacontainer'>
                    <h2>
                    Street Address
                    </h2>
                    <input type="text" name="name" />
                </div>
                <div className='datacontainer'>
                    <h2>
                    City
                    </h2>
                    <input type="text" name="name" />
                </div>
                <div className='datacontainer'>
                    <h2>
                    State
                    </h2>
                    <input type="text" name="name" />
                </div>
                <div className='datacontainer'>
                    <h2>
                    Zip
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

export default SignUp