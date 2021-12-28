import Amplify, { Auth } from 'aws-amplify'

Amplify.configure({
  Auth: {
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_K4VlO24kE',
    userPoolWebClientId: '2jlmvbk364psdq4fab3ufij2qa',
  },
})

;(async () => {
  const form = document.querySelector('.form')
  const email = document.querySelector('.email')
  const password = document.querySelector('.password')

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    try {
      const res = await signUp(email.value, password.value)
      console.log('Signup success. Result: ', res)
    } catch (e) {
      console.log('Signup fail. Error: ', e)
    }
  })
})()

async function signUp(email, password) {
  return Auth.signUp({
    username: email,
    password,
    attributes: {
      email,
    },
  })
}