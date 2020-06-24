import React from 'react';
import './SettingHistory.css';
import {connect} from 'react-redux';

const settingHistory = (props) => {

    return (
        <div>
            <h1>History</h1>
            <div className='SettingHistory'>
                {
                    props.history.map((item, index) => {
                        return (
                            <div style={{display: 'flex', marginTop: '16px'}} key={index}>
                                <div className={item[2].clicked === item[0].id ? `SettingHistoryResult ${item[2].correct}` : `SettingHistoryResult`}>
                                    <span>{item[0].main.temp}</span>{item[0].name}
                                </div> 
                                <div className={item[2].clicked === item[1].id ? `SettingHistoryResult ${item[2].correct}`  : `SettingHistoryResult`}>
                                    <span>{item[1].main.temp}</span>{item[1].name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        history: state.history
    };
};

export default connect(mapStateToProps)(settingHistory);