import React, { useState } from 'react'
import styles from './Button.module.css'
import PropTypes from "prop-types"

const Button = (props) => {
    console.log(props);

    const [clicked, setclicked] = useState({isClicked:false, info2:"coucou"});

    return <button type={props.type} className={styles.Button+" "+(clicked.isClicked?styles.clicked:"")} onClick={(evt) => {
        props.onBoutonClick();
        setclicked({...clicked, isClicked:true});
        setTimeout(()=>setclicked({...clicked, isClicked:false}), 350)
    }}>{props.text}</button>
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
    }),
    onBoutonClick:PropTypes.func
}

Button.defaultProps={
    type:'button'
}
export default Button;