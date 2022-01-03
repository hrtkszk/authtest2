import React from 'react'
import { css } from 'glamor'
import { Auth } from 'aws-amplify'
import UserContext from './UserContext'
// import {
//   useNavigate,
//   BrowserRouter as Router
// } from 'react-router-dom'
// let navigate = useNavigate()
// let from = location.state?.from?.pathname || "/"

class ForgotPassword extends React.Component {
  state = {
    username: '',
    confirmationCode: '',
    password: ''
  }
  static contextType = UserContext
  onChange = (key, value) => {
    this.props.updateErrorMessage(null)
    this.setState({
      [key]: value
    })
  }

  forgotPasswordSubmit = () => {
    const { username, password, confirmationCode } = this.state
    Auth.forgotPasswordSubmit(username, confirmationCode, password)
      .then(
        alert('パスワードを変更しました。ログインしてください。'),
        window.location.href = "/auth"
        //navigate(from, { replace: true })
      )
      .catch(err => console.log('error resetting password:', err))
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
          <input
            onChange={evt => this.onChange('confirmationCode', evt.target.value)}
            {...css(styles.input)}
            placeholder='認証コード'
          />
          <input
            onChange={evt => this.onChange('password', evt.target.value)}
            {...css(styles.input)}
            type='password'
            placeholder='新しいパスワード'
          />
          <div {...css(styles.button)} onClick={this.forgotPasswordSubmit}>
            <p {...css(styles.buttonText)}>パスワードの再設定</p>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  signInHeader: {
    textAlign: 'left',
    margin: '0px 0px 20px'
  },
  button: {
    padding: '10px 60px',
    backgroundColor: '#ffb102',
    marginTop: 10,
    marginBottom: 10,
    cursor: 'pointer',
    borderRadius: '30px',
    ':hover': {
      backgroundColor: '#ffbb22'
    }
  },
  buttonText: {
    margin: 0,
    color: 'white'
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
  container: {
    flex: 1,
    paddingTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formContainer: {
    padding: 20,
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: "0px 0px 2px rgba(0, 0, 0, .2)",
    borderRadius: 20
  }
}

export default ForgotPassword
