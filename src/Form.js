import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    border: 1px solid white;
    padding: 2rem;
`

const StyledContainer = styled.div`
    text-align: left;
`

const StyledLabel = styled.label`

`

const StyledInput = styled.input`
    display: block;
`

const StyledButton = styled.button`
    background: white;
    width: 100%;
`

class Form extends React.Component{
    state = {
        name: '',
        email: '',
        password: '',
        phone: ''
    }

    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value});
    }

    render(){
        return(
            <StyledForm>
                <StyledContainer>
                    <StyledLabel>Name</StyledLabel>
                    <StyledInput type='text' name='name' value={this.state.name} onChange={this.handleInput} placeholder='Full Name' />
                </StyledContainer>
                <StyledContainer>
                    <StyledLabel>Email</StyledLabel>
                    <StyledInput type='email' name='email' value={this.state.email} onChange={this.handleInput} placeholder='Email' />
                </StyledContainer>
                <StyledContainer>
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput type='password' name='password' value={this.state.password} onChange={this.handleInput} placeholder='Password' />
                </StyledContainer>
                <StyledContainer>
                    <StyledLabel>Phone</StyledLabel>
                    <StyledInput type='tel' name='phone' value={this.state.phone} onChange={this.handleInput} placeholder='Phone' />
                </StyledContainer>
                <StyledButton type='submit'>Submit</StyledButton>
            </StyledForm>
        )
    }
}

export default Form;