import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './WeatherDetails.scss';
import LineChart from '../ChartComponent/LineChart';
import { getTimeFormat } from '../../helpers/weather.helper';


const WeatherDetails = () => {
    const weather = useSelector(state => state);
    const { item } = useParams();
    const navigate = useNavigate();
    const { weatherData } = weather;

    const oneDayData = weatherData.list?.filter(day => day.dt_txt.includes(item.split(" ")[0]));

    const time = oneDayData.map((item) => {
        return getTimeFormat(item.dt_txt.split(' ')[1]);
    })

    const temp = oneDayData.map((item) => {
        return item.main.temp;

    });

    const userData = {
        labels: (time),
        datasets: [{
            label: "3 hour forcast",
            data: temp,
            backgroundColor: ['silver', 'gray'],
            borderColor: "black",
            borderWidth: 2,
            width: 400
        }]
    }

    const backToPrevPage = () => {
        navigate('/')
    }

    return (

        <>
            <div className='line-chart'>
                <LineChart chartData={userData} />
            </div>
            <div className='back-button-container'>
                <button className='back-button' onClick={() => backToPrevPage()}> Back to Home Page</button>
            </div>

        </>

    )
}

export default WeatherDetails;
