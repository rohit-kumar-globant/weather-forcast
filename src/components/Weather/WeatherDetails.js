import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { map, filter, includes, split } from 'ramda';
import { useSelector } from 'react-redux';
// import { useNavigate, useParams } from "@reach/router";
// import { navigate } from '@reach/router';
import './WeatherDetails.scss';
import LineChart from '../ChartComponent/LineChart';
import { getTimeFormat } from '../../helpers/weather.helper';


const WeatherDetails = () => {
    const weather = useSelector(state => state.weather);
    const { item } = useParams();
    const navigate = useNavigate();
    const { weatherData } = weather;
    const { list } = weatherData || {};

    const oneDayData = list && filter(day => includes((split(" ", item)[0]), day.dt_txt), list);

    const time = map((item) => {
        return getTimeFormat(split(' ', item.dt_txt)[1]);
    }, oneDayData)

    const temp = map((item) => {
        return item.main.temp;
    }, oneDayData)

    const userData = {
        labels: time,
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
