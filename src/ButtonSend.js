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
    padding: '10px 10px',
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
    margin: 0,
    color: 'white'
  }
}

export default Button