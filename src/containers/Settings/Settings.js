import React from 'react';
import SettingUnit from '../../components/SettingUnit/SettingUnit';
import SettingHistory from '../../components/SettingHistory/SettingHistory'

const settings = (props) => {
    return (
        <div>
            <SettingUnit modalClosed={props.modalClosed}/>
            <SettingHistory />
        </div>  
    );
};

export default settings;