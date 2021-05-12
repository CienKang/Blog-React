import React, { useState } from 'react';

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleChange = (e) => {
        if (e.target.id === 'email')
            setEmail(e.target.value);
        if (e.target.id === 'password')
            setPassword(e.target.value);
        if (e.target.id === 'firstName')
            setFirstName(e.target.value);
        if (e.target.id === 'lastName')
            setLastName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, firstName, lastName);
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" required onChange={handleChange} />
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 x-depth-0">Sign Up</button>
                </div>

            </form>
        </div>
    )
}

export default SignUp;