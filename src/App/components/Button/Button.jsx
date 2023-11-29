import React from 'react'
import styles from './Button.module.css'
import PropTypes from "prop-types"
const Button = (props) => {
    console.log(props);
    return <button type={props.type} className={styles.Button}>{props.text}</button>
}

Button.propTypes={
    text:PropTypes.string.isRequired,
    type:PropTypes.oneOf(["submit","reset","button"]),
    size:PropTypes.shape({
        margin: PropTypes.shape({
            right: PropTypes.string,
            left:PropTypes.string,
            top:PropTypes.string
        })
    })

}
export default Button;