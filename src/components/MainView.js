import SubView from "./SubView"

const MainView = ({ results }) => {

    const handleSelect = () => {
        
    }

    return (
        <div className="main-view">
            {/* <h2>Results</h2> */}
            <div className="content">
                {results.map(result => (
                    <div className="result-view" key={result.woeid}>
                        <ul>
                            <li onClick={handleSelect}>
                                <h2>{ result.title }</h2>
                                <h3>Latt, Long: { result.latt_long }</h3>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <SubView />
        </div>
    );
}
 
export default MainView;