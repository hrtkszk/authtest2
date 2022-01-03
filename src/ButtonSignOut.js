import React from 'react'
import { css } from 'glamor'

function Button({ onClick, title }) {
  return (
    <div {...css(styles.yellowButton)} onClick={onClick}>
      <p {...css(styles.buttonText)}>{title}</p>
    </div>
  )
}

const styles = {
  yellowButton: {
    padding: '5px 5px',
    backgroundColor: '#ffb102',
    marginLeft: 20,
    marginTop: 10,
    width: 70,
    marginBottom: 10,
    cursor: 'pointer',
    borderRadius: '30px',
    ':hover': {
      backgroundColor: '#ffbb22'
    }
  },
  buttonText: {
    marginTop: 0,
    marginBottom: 0,
    color: 'white'
  }
}

export default Button