import React from 'react'
import { css } from 'glamor'

import { Auth } from 'aws-amplify'
// import {
//   useNavigate,
//   BrowserRouter as Router
// } from 'react-router-dom'
// let navigate = useNavigate()
// let from = location.state?.from?.pathname || "/"

class SignUp extends React.Component {
  state = {
    username: '',
    authCode: ''
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  confirmSignUp = () => {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
    .then(
      alert('登録しました。ログインしてください。'),
      window.location.href = "/auth"
      // navigate(from, { replace: true })
      //useEffect(() => {window.location.href = "https://www.google.com"}, [])
      )
    .catch(err => console.log('error confirming signing up: ', err))
  }
  render() {
    return (
      <div {...css(styles.container)}>
        <div {...css(styles.formContainer)}>
          <input
              onChange={evt => this.onChange('username', evt.target.value)}
              {...css(styles.input)}
              placeholder='メールアドレス'
          />
          <h2 {...css(styles.signUpHeader)}>認証コード入力</h2>
          <input
            onChange={evt => this.onChange('authCode', evt.target.value)}
            {...css(styles.input)}
            placeholder='認証コード'
          />
          <div {...css(styles.button)} onClick={this.confirmSignUp}>
            <p {...css(styles.buttonText)}>登録する</p>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  signUpHeader: {
    textAlign: 'left',
    margin: '0px 0px 20px'
  },
  button: {
    padding: '10px 60px',
    backgroundColor: '#ffb102',
    cursor: 'pointer',
    borderRadius: '30px',
    marginTop: 10,
    marginBottom: 10,
    ':hover': {
      backgroundColor: '#ffbb22'
    }
  },
  buttonText: {
    margin: 0,
    color: 'white'
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '15px',
  },
  formContainer: {
    padding: 20,
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: "0px 0px 2px rgba(0, 0, 0, .2)",
    borderRadius: 20
  },
  input: {
    height: 40,
    marginBottom: '10px',
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid #ffb102',
    fontSize: '16px',
    '::placeholder': {
      color: 'rgba(0, 0, 0, .3)'
    }
  },
}

export default SignUp
