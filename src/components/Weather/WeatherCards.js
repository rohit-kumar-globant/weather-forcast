import { map } from 'ramda';
import moment from 'moment';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "@reach/router";
// import { navigate, Link } from '@reach/router';

import './WeatherCards.scss';

import { getDayName, getDateFormat, renderWeatherIcon } from '../../helpers/weather.helper';

const WeatherIcon = styled.div`
  color: black;
`;
export const WeatherCards = ({ dailyData }) => {
    const navigate = useNavigate();

    const renderWeatherDetailsPage = (item) => {
        console.log('item', item)
        navigate(`/weather-details/${item}`)
    }

    return (
        <>
            {dailyData && map((item, index) => (
                <div key={item.dt} className="flex-day" onClick={() => renderWeatherDetailsPage(item.dt_txt)}>
                    <blockquote>{moment(getDayName(item.dt)).format('dddd')}</blockquote>
                    <p className='weather-date'>{getDateFormat(item.dt_txt)}</p>
                    <WeatherIcon className='weather-icon' >{renderWeatherIcon(item.weather[0].main)}</WeatherIcon>
                    <p className='weather-temperature' >{(item.main.temp).toPrecision(2)}&deg;C</p>
                    <p className='weather-description' >{item.weather[0].description}</p>
                </div>
            ), dailyData)}
        </>
    )


}
