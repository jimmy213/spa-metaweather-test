const SubView = ({ weather }) => {
    return (
        <div className="sub-view">
            {weather.map(weather => (
                <div className="weather-view" key={weather.id}>
                    <ul className="weather-data">
                        <li>
                            <h4>{ weather.applicable_date }</h4>
                            <h2>{ weather.weather_state_name }</h2>
                            <h3>{ weather.max_temp }</h3>
                            <h3>{ weather.min_temp }</h3>
                            <h3>{ weather.humidity }</h3>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
 
export default SubView;