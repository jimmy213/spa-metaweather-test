import { useState } from 'react'
import MainView from "./MainView"

const SearchBar = () => {

    const [input, setInput] = useState('');
    const [citySearch, setCitySearch] = useState(null);

    const handleClick = inp => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${inp}`)
        .then(res => res.json())
        .then(data => {
            setCitySearch(data);
        });
    }

    return (
        <div className="search-bar">
            <h2>Enter City name or Coordinates "e.g. 36.96,-122.02"</h2>
            <div className="search-term">
                <input type="text" placeholder="Search by City..." value={input} onInput={e => setInput(e.target.value)} />
                <button onClick={ () => handleClick(input) }>Submit</button>
            </div>
            {citySearch && <MainView results={citySearch} />}
        </div>
    );
}
 
export default SearchBar;