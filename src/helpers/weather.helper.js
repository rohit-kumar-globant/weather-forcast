
import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function getDayName(dt) {
    let newDate = new Date();
    const weekday = dt * 1000
    return newDate.setTime(weekday)
}

export function getDateFormat(dateString) {
    const dateObj = new Date(dateString);
    const options = { month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);
    return formattedDate;
}

export function renderWeatherIcon(weatherDescription) {
    let weatherIcon = null;

    if (weatherDescription === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if (weatherDescription === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (weatherDescription === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (weatherDescription === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (weatherDescription === 'Clear') {
        weatherIcon = <FontAwesomeIcon icon={faSun} />;
    } else if (weatherDescription === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} />;
    } else {
        weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }
    return weatherIcon;
}