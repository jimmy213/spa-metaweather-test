import { useState } from 'react'
import SubView from "./SubView"

const MainView = ({ results }) => {

    const [weatherData, setWeatherData] = useState(null);

    const handleSelect = woeid => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
        .then(res => res.json())
        .then(data => {
            setWeatherData(data.consolidated_weather);
        });
    }

    return (
        <div className="main-view">
            <div className="content">
                {results.map(result => (
                    <div className="result-view" key={result.woeid}>
                        <ul>
                            <li onClick={() => handleSelect(result.woeid)}>
                                <h2>{ result.title }</h2>
                                <h3>Latt, Long: { result.latt_long }</h3>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            {weatherData && <SubView weather={weatherData} />}
        </div>
    );
}
 
export default MainView;