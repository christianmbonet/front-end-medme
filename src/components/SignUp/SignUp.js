import React from "react"

const SignUp = () => {
    return (
        <div>
            <h1>
                <div className='signup'>Sign Up</div>
                <div className='signin'>Sign In</div>
            </h1>
            <form className='formcontainer'>
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