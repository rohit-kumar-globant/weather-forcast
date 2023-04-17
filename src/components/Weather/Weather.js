import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, includes } from 'ramda';
// import { createSelector } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import './Weather.scss';
import { WeatherCards } from './WeatherCards';
import locationImg from '../../../src/assets/location.jpg'
import { fetchUsers } from '../../redux/actions';
import { useTranslation } from 'react-i18next';

const Weather = () => {
    const { t } = useTranslation();

    const data = useSelector(state => state.weather);

    // const weather = (state) => state.weather;
    // const data = createSelector([weather], weatherData => weatherData);
    // console.log('data', data);

    const dispatch = useDispatch();
    const [cityName, setCityName] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    const { isLoading, weatherData } = data;
    const { city, list } = weatherData || {};
    const { name, country } = city || {};

    const dailyData = filter(day => includes("12:00:00", day.dt_txt), list)
    const searchButtonHandler = (cityName) => {
        if (cityName === '') {
            setIsEmpty(true)
            return true;
        }
        setCityName('')
        dispatch(fetchUsers(cityName))
    }

    useEffect(() => {
        if (name) {
            dispatch(fetchUsers(name))
        } else {
            dispatch(fetchUsers())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className='search'>
                <label className='search-label' ><strong>{t('searchLabel')}</strong></label>
                <input className='search-input'
                    type="text"
                    value={cityName}
                    onBlur={() => setIsEmpty(false)}
                    onChange={(e) => setCityName(e.target.value)}
                    placeholder="Search city..." />
                <button className='search-button' onClick={() => searchButtonHandler(cityName)}>{t('searchButtonLabel')}</button>
            </div>
            {isEmpty && <p className='validation-error'>{t('validationError')}</p>}

            <div className='loading-text'>
                {isLoading ?
                    <p>Loading...</p> :
                    <p>
                        <img className="location-img" src={locationImg} alt="location" />
                        <span className='city-name'>{name},{country}</span>
                    </p>
                }
            </div>
            <div>
                <div className="container">
                    <WeatherCards dailyData={dailyData} />
                </div>
            </div>
        </div>
    )
}

export default Weather;