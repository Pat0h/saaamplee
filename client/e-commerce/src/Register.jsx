import React, {useState} from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className='authentication-form'>
            <h1>Sign Up</h1>
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <input value={name} name='name' id='name' placeholder='Full Name'/>
            <label htmlFor='email'>email</label>
            <input value={email} type='email' placeholder='youremail@email.com' id='email' name='aaaaa'/>
            <label htmlFor='password'>Password</label>
            <input value={pass} type='password' placeholder='########' id='password' name='password'/>
            <button>Sign Up</button>
        </form>
        <button className='link' onClick={() => props.onFormSwitch('login')}>Log In</button>
        </div>
    )
}