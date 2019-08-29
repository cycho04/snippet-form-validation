import React, {useState} from 'react';

const Form = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name: </label>
                <input type='text' name='firstName' required/>
                <label>Last Name: </label>
                <input type='text' name='lastName' required/>
            </div>
            <div>
                <label>Email</label>
                <input type='email' name='email' required/>
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password' required/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type='password' name='passwordConfirm' required/>
            </div>
            <input type='submit' value='Submit'/>
        </form>
    )
}

export default Form;