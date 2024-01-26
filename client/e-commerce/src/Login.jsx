import React, {useState} from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='authentication-form'>
            <h1>Sign In</h1>
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>email</label>
            <input value={email} type='email' placeholder='youremail@email.com' id='email' name='aaaaa'/>
            <label htmlFor='password'>Password</label>
            <input value={pass} type='password' placeholder='########' id='password' name='password'/>
            <button>Sign In</button>
        </form>
        <button className='link' onClick={() => props.onFormSwitch('register')}> Sign Up</button>
        </div>
    )
}