import React from 'react';
import './Header.css';
import SettingIcon from '../Icons/SettingIcon';
import {connect} from 'react-redux';

const Header = (props) => {
    return(
        <div className='Header'>
            <p>Score: <strong>{props.score}</strong></p>
            <SettingIcon onClick={props.openModal} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        score: state.score
    };
};

export default connect(mapStateToProps)(Header);