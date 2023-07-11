import "./App.css";
import Card from "./comp/card";
import Search from "./utilities/search";
import FilterFunctions from "./utilities/filterFunctions";
import FilterClass from "./utilities/filterClass";
import FilterCapacity from "./utilities/filterCapacity";
import Sort from "./utilities/sort";
import { ShowMoreButton } from "./utilities/showMore";
import { useSelector } from "react-redux";


interface State {
  washers: {
    resultNumber: number;
  }
}

function App() {
  const resultNumber = useSelector((state: State)=> state.washers.resultNumber)
  return (
    <>
      <div className="app">
        <div className="header-text">
          <h1>Wybierz urządzenie</h1>
        </div>
        <div className="container-flex">
          <Search />
          <div className="filters">
            <Sort />
            <FilterFunctions />
            <FilterClass />
            <FilterCapacity />
          </div>
          <div className="result-number">
          <p>Liczba wyników: {resultNumber}</p>
          </div>
          <div className="cards">
            <Card />
          </div>
          <ShowMoreButton/>
        </div>
      </div>
    </>
  );
}

export default App;
