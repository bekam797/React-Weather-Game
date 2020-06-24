import React from 'react';
import SettingsIcon from '../../assets/images/settings-icon.svg';

const icon = (props) => (
    <button 
        style={{
            border: 'none',
            background: 'transparent',
            outline: 'none'
        }}
        {...props}>
    <img style={{width: "32px", cursor: 'pointer'}} src={SettingsIcon} alt='Settings' />
    </button>
);

export default icon;