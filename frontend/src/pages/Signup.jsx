import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

export default function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })
    const hangleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        const copySignupInfo = {...signupInfo};
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = (e) => {
        e.preventDefault();
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        onChange={hangleChange}
                        type="text" 
                        name='name'
                        autoFocus
                        placeholder='Enter your name'
                        value = {signupInfo.name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        onChange={hangleChange}
                        type="email" 
                        name='email'
                        autoFocus
                        placeholder='Enter your email'
                        value = {signupInfo.email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        onChange={hangleChange}
                        type="password" 
                        name='password'
                        placeholder='Enter your password'
                        value = {signupInfo.password}
                    />
                </div>
                <button type='submit'>Signup</button>
                <span>Already have an account ? 
                    <Link to='/login'>Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    )
}