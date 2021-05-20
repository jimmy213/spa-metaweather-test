const MainView = ({ results }) => {
    return (
        <div className="main-view">
            <h2>Results</h2>
            {results.map(result => (
                <div className="result-view" key={result.woeid}>
                    <ul>
                        <li>
                            <h2>{ result.title }</h2>
                            <h2>Lattitude, Longitude: { result.latt_long }</h2>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
 
export default MainView;