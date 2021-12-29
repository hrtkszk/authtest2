import Amplify, { Auth } from 'aws-amplify'
import React, { Component } from 'react'

Amplify.configure({
  Auth: {
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_K4VlO24kE',
    userPoolWebClientId: '2jlmvbk364psdq4fab3ufij2qa',
  },
})

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    email: ''
    // phone_number: ''
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  signUp() {
    const { password, email } = this.state

    try {
      const res = Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
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
