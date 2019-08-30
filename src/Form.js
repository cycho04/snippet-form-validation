import React from 'react';
import styled from 'styled-components';

import useForm from './useForm';

const Form = () => {
    const {inputs, handleSubmit, handleChange} = useForm(submitted);

    function submitted(){
        alert('submitted!');
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name: </label>
                <input value={inputs.firstName} onChange={handleChange} type='text' name='firstName' required/>
                <label>Last Name: </label>
                <input value={inputs.lastName} onChange={handleChange} type='text' name='lastName' required/>
            </div>
            <div>
                <label>Email</label>
                <input value={inputs.email} onChange={handleChange} type='email' name='email' required/>
            </div>
            <div>
                <label>Password</label>
                <input value={inputs.password} onChange={handleChange} type='password' name='password' required/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input value={inputs.passwordConfirm} onChange={handleChange} type='password' name='passwordConfirm' required/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;