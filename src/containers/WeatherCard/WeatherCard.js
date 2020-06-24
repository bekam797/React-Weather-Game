import React, {useState} from 'react';
import withErrorHandler from '../../hoc/withErrorHandler';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Game from '../../components/Game/Game';
import Modal from '../../components/UI/Modal/Modal';
import Settings from '../Settings/Settings';
import './WeatherCard.css';

const WeatherCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const modalHandler = () => setIsOpen(!isOpen);

    return (
        <div className='WeatherCard' >
            <Header openModal={modalHandler} />
            <Game />
            <Modal show={isOpen} modalClosed={modalHandler}>
                <Settings modalClosed={modalHandler} />
            </Modal>
        </div>
    );
};

export default withErrorHandler(WeatherCard, axios);