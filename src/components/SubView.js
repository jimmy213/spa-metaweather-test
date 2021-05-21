const SubView = ({ weather }) => {
    return (
        <div className="sub-view">
            {weather.map(weather => (
                <div className="weather-view" key={weather.id}>
                    <ul className="weather-data">
                        <li>
                            <h4>{ weather.applicable_date }</h4>
                            <div className="condition">
                                <img src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`} alt="Icon" />
                                <h2>{ weather.weather_state_name }</h2>
                            </div>
                            <div className="temps">
                                <h3>Current: { Math.trunc(weather.the_temp) }°C</h3>
                                <h3>Max: { Math.trunc(weather.max_temp) }°C</h3>
                                <h3>Min: { Math.trunc(weather.min_temp) }°C</h3>
                            </div>
                            <h3>Humidity: { weather.humidity }%</h3>
                            <h3>Visibility: { weather.visibility.toFixed(1) } miles</h3>
                            <h3>Pressure: { weather.air_pressure }mb</h3>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
 
export default SubView;