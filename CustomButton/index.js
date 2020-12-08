import React from 'react'
const styles = {
    large: { height: '48px'},
    small: { height: '16px'},
    default: { height: '32px'}
}
const Button = ({ size }) => {
    return <button style={styles[size|| 'default']}>按钮</button>
}

export default Button