import './App.css';
import MainView from './components/MainView';
import SearchBar from './components/SearchBar';
import SubView from './components/SubView';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <MainView />
      <SubView />
    </div>
  );
}

export default App;
