import React, {useState, useEffect} from 'react';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/action';
import './Game.css';

const Game = (props) => {

    useEffect(() => {
        props.onInitCities();
    }, []);
    
    const [fBtnType, setFBtnType] = useState('');
    const [sBtnType, setSBtnType] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [disabledGame, setDisabledGame] = useState(false);

    const weatherDeferenceHandler = (id) => {

        setDisabledGame(true);
        setDisabled(false);

        let btnId1 = props.curCities[0].id;
        let btnId2 = props.curCities[1].id;
        let temp1 = props.curCities[0].main.temp;
        let temp2 = props.curCities[1].main.temp;
        let typeIs = '';

        if(id === btnId1 && temp1 > temp2){
            setFBtnType('Success');
            props.onScoreAdded();
            typeIs = 'Success';
        } else if (id === btnId2 && temp2 > temp1) {
            setSBtnType('Success');
            props.onScoreAdded();
            typeIs = 'Success';
        } else if (id === btnId1 && temp1 < temp2) {
            setFBtnType('Danger');
            typeIs = 'Danger';
        } else if (id === btnId2 && temp2 < temp1) {
            setSBtnType('Danger');
            typeIs = 'Danger';
        }

        props.onGetHistory([...props.curCities, {clicked: id, correct: typeIs }])
    };

    const showButtons = props.curCities.map((citieTemp, index) => {
        return (
            <Button
                key={citieTemp.id}
                onClick={() => weatherDeferenceHandler(citieTemp.id)}
                btnType={index === 0 ? fBtnType : sBtnType}
                disabled={disabledGame}
                >
                    <span>{!disabledGame ? '?' : citieTemp.main.temp}</span> 
                    {citieTemp.name}
            </Button>
        );
    });

    const nextCities = () => {
        setFBtnType('');
        setSBtnType('');
        setDisabled(true);
        setDisabledGame(false);
        props.onInitCities();
    };

    let looseOrWin = '';

    if(fBtnType === 'Success' || sBtnType === 'Success') {
        looseOrWin = <p style={{color: '#2FCD8A'}}>You Win :)))</p>
    } else if (fBtnType === 'Danger' || sBtnType === 'Danger') {
        looseOrWin = <p style={{color: '#E03010'}}>You Lose :(((</p>
    }

    return (
        <Aux>
            <div className='Game'>
                <h1>Which city is hotter?</h1>
                {looseOrWin}
                {showButtons}
            </div>
            <Button 
                btnType="BtnNext"
                disabled={disabled}
                onClick={nextCities} >
                    Next Cities
            </Button>
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        curCities: state.currentCities,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitCities: () => dispatch(actionCreators.cities()),
        onScoreAdded: () => dispatch(actionCreators.addScore()),
        onGetHistory: (getCitieHistory) => dispatch(actionCreators.storeHistory(getCitieHistory))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);