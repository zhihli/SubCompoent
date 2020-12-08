/*
*  button component
* */
import React from 'react'
const styles = {
    large: { height: '48px'},
    small: { height: '22px'},
    default: { height: '32px'}
}
const Button = ({ size }) => {
    return <button style={styles[size|| 'default']}>Button</button>
}

export default Button