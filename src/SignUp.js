
import React, { Component } from 'react'
import { Auth } from 'aws-amplify'

class SignUp extends React.Component {
    state = {
      password: '',
      email: ''
      // phone_number: ''
    }
  
    onChange = (key, value) => {
      this.setState({
        [key]: value
      })
    }
  
    signUp = () => {
      try {
        const res = Auth.signUp({
          username: this.state.email,
          email: this.state.email,
          password: this.state.password,
        })
        console.log('Signup success. Result: ', res)
      } catch (e) {
        console.log('Signup fail. Error: ', e)
      }
    }
  
    render() {
      return (
          <div>
            Amplify-browser
            <div>
              Email:
              <input
                  placeholder='メールアドレス'
                  onChange={evt => this.onChange('email', evt.target.value)}
                />
            </div>
            <div>
              Password:
              <input
                  placeholder='パスワード'
                  type='password'
                  onChange={evt => this.onChange('password', evt.target.value)}
                />
            </div>
            <div>
              <button onClick={this.signUp}>Sign Up</button>
            </div>
          </div>
      )
    }
  }
  
  export default SignUp
  