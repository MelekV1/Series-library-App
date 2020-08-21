import React ,{useState}from 'react';
import './App.css';
import SerieList from "./Components/SerieList"
import SeriesData from "./Components/SeriesData"
import Search from './Components/SearchSerie/SearchSerie'
function App() {

  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);


  return (
    <React.Fragment>
      <Search
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
      <SerieList
        Data={SeriesData}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
            />
    </React.Fragment>
  );
}

export default App;
