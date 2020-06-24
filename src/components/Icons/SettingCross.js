import React from 'react';
import SettingCross from '../../assets/images/cross.svg';

const icon = (props) => (
    <button 
        style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            height: '100%',
            padding: '0'
        }}
        {...props}
        >
    <img style={{width: "32px", cursor: 'pointer'}} src={SettingCross} alt='Settings' />
    </button>
);

export default icon;