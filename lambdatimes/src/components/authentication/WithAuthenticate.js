import React from 'react';

const WithAuthenticate = App => LoginPage => class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            password: '',
            username: ''
        }

        localStorage.setItem('username', 'pherpher089')
        localStorage.setItem('password', 'LambdaSchool19')
    }

    ChangeHandler = event =>{
        this.setState({[event.target.name]: event.target.value})
    }

    OnSubmit = event =>{
        if(this.state.username === localStorage.getItem('username') && this.state.password === localStorage.getItem('password')){
            this.setState({isLoggedIn: true})
        }
    }

    render(){
        if(this.state.isLoggedIn){
            return <App/>
        }
        else{
            return <LoginPage userValue={this.state.username} passValue={this.state.password} changeHandler={this.ChangeHandler} onSubmit={this.OnSubmit}/>
        }
    }
}

export default WithAuthenticate