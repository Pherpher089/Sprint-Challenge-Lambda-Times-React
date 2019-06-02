import React from 'react';
import styled from 'styled-components'

const LoginDiv = styled.div`
`

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <LoginDiv>
                <form onSubmit={this.props.onSubmit}>
                    <input 
                        type='text'
                        placeHolder='username' name='username'
                        value={this.props.userValue} onChange={this.props.changeHandler}>
                    </input>
                    <input 
                        type='password' placeHolder='password' name='password' 
                        value={this.props.passValue} onChange={this.props.changeHandler}>
                    </input>
                    <button>Log in</button>
                </form>
            </LoginDiv>
        )
    }
}

export default Login;