import React from 'react';
import { Redirect } from "react-router-dom"

class LoginComponent extends React.Component {
    state = {
        password:"",
        username:""

      }
    render() { 
        return ( <div>
            <input type="text" value={this.state.username} placeholder="username" onChange={(val)=> this.setState({username: val.currentTarget.value})}></input>
            <input type="password" value={this.state.password} placeholder="username" onChange={(val)=> this.setState({password: val.currentTarget.value})}></input>
            <input type="button" onClick={this.login} value="login"></input>
        </div> );
    }

    login = async () => {
        var res = await fetch("http://localhost:3333/users/login", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })

        if (res.ok){
            var json = await res.json();
            localStorage.setItem("token", json.token)
            this.props.setToken(res.token)
            // this.props.history.push('/')
            //=> redirect to home
        }
    }
}
 
export default LoginComponent;