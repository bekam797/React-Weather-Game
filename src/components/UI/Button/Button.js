import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button
        {...props}
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}>{props.children}</button>
);

export default button;