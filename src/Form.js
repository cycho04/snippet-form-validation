import React from 'react';

class Form extends React.Component{
    state = {}

    render(){
        return(
            <form>
                <h2>Form</h2>
                <div>
                    <label>Name</label>
                    <input type='text'></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email'></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password'></input>
                </div>
                <div>
                    <label>Phone</label>
                    <input type='tel'></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form;