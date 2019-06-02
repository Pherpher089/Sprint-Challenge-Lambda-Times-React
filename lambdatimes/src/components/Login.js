import React from 'react';
import styled from 'styled-components'

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
    height: 20rem;
    background-color: white;
    border: 1px solid lightgrey;
    margin-left: 40vw;
    margin-top: 25vh;
`
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const LoginH1 = styled.h1`

`
const LoginTileDiv = styled.div`
`

const LoginH2 = styled.h2`

`
const LoginInput = styled.input`
    margin-top: 1rem;
`
const LoginButton = styled.button`
    margin-top: 1rem;   

`

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <LoginDiv>
                <LoginForm onSubmit={this.props.onSubmit}>
                    <LoginTileDiv>
                        <LoginH1>Lambda Times</LoginH1>
                        <LoginH2>Log in</LoginH2>
                    </LoginTileDiv>
                    
                    <LoginInput 
                        type='text'
                        placeHolder='username' name='username'
                        value={this.props.userValue} onChange={this.props.changeHandler}>
                    </LoginInput>
                    <LoginInput 
                        type='password' placeHolder='password' name='password' 
                        value={this.props.passValue} onChange={this.props.changeHandler}>
                    </LoginInput>
                    <LoginButton>Log in</LoginButton>
                </LoginForm>
            </LoginDiv>
        )
    }
}

export default Login;