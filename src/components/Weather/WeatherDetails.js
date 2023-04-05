import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import * as R from 'ramda';
import moment from 'moment';
import styled from 'styled-components';

import './WeatherDetails.scss';
import { getDayName, getDateFormat, renderWeatherIcon } from '../../helpers/weather.helper';

import { useSelector } from 'react-redux';

const WeatherIcon = styled.div`
  color: black;
`;
const WeatherDetails = () => {
    const weather = useSelector(state => state)
    const { item } = useParams();
    const navigate = useNavigate();
    const { weatherData } = weather;

    const oneDayData = weatherData.list?.filter(day => day.dt_txt.includes(item.split(" ")[0]));

    const backToPrevPage = () => {
        navigate('/')
    }

    return (

        <>
            <div className='container'>
                {oneDayData && R.map((item, index) => (
                    <div key={item.dt} className="flex-days">
                        <blockquote>{moment(getDayName(item.dt)).format('dddd')}</blockquote>
                        <p className='weather-date'>{getDateFormat(item.dt_txt)}</p>
                        <WeatherIcon className='weather-icon' >{renderWeatherIcon(item.weather[0].main)}</WeatherIcon>
                        <p className='weather-temperature' >{(item.main.temp).toPrecision(2)}&deg;C</p>
                        <p className='weather-description' >{item.weather[0].description}</p>
                    </div>
                ), oneDayData)}

            </div>
            <div className='back-button-container'>
                <button className='back-button' onClick={() => backToPrevPage()}> Back to Home Page</button>
            </div>
        </>

    )
}

export default WeatherDetails;
