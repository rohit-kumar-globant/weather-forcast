import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Weather.scss';
import { WeatherCards } from './WeatherCards';
import { fetchUsers } from '../../redux/actions';

const Weather = () => {
    const data = useSelector(state => state)
    const dispatch = useDispatch();

    const [cityName, setCityName] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    const { isLoading, weatherData } = data;
    const { city, list } = weatherData;
    const { name, country } = city || {};

    const dailyData = list?.filter(day => day.dt_txt.includes("12:00:00"))

    const searchButtonHandler = () => {
        if (cityName === '') {
            setIsEmpty(true)
            return true;
        }
        setCityName('')
        dispatch(fetchUsers(cityName))
    }

    useEffect(() => {
        dispatch(fetchUsers())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className='search'>
                <label className='search-label' ><strong>Search city:</strong></label>
                <input className='search-input' type="text" value={cityName} onBlur={() => setIsEmpty(false)} onChange={(e) => setCityName(e.target.value)} placeholder="Search city..." />
                <button className='search-button' onClick={() => searchButtonHandler()}>Search</button>
            </div>
            {isEmpty && <p style={{ color: 'red' }}>Please enter city name !!!</p>}

            <div>
                <blockquote className='loading-text'>
                    {isLoading ? <p>Loading...</p> : <p> {name},{country}</p>}
                </blockquote>
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