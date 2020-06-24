import React from 'react';
import SettingCross from '../../components/Icons/SettingCross';
import './SettingUnit.css'
import {connect} from 'react-redux';
import * as actionCreators from '../../store/action';
 
const settingUnit = (props) => {

    return (
        <div className='SettingUnit'>
            <div className='SettingHead'>
                <h1>Settings</h1>
                <SettingCross onClick={props.modalClosed}/>
            </div>
            <hr style={{border: '1px solid #707070'}}/>
            <h1>Unit</h1>
            <div className='SettingRadioButton'>
                <label>
                    <input 
                        type="radio"
                        name='temp'
                        value="celsius"
                        onChange={props.onFarToCelsiusChange}
                        defaultChecked 
                        />
                    <span className="SettingDesign"></span>
                    <span className="SettingText">Celsius</span>
                </label>
                <label>
                    <input 
                        type="radio" 
                        name='temp'
                        value="farenheit" 
                        onChange={props.onCelsiusChange}/>
                    <span className="SettingDesign"></span>
                    <span className="SettingText">Farenheit</span>
                </label>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        onCelsiusChange: () => dispatch(actionCreators.celsiusToFar()),
        onFarToCelsiusChange: () => dispatch(actionCreators.farToCelsius())
    }
}

export default connect(null, mapDispatchToProps)(settingUnit);