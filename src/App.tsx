import "./App.css";
import Card from "./comp/card";
import Search from "./comp/search";
import FilterFunctions from "./comp/filterFunctions";
import FilterClass from "./comp/filterClass";
import FilterCapacity from "./comp/filterCapacity";
import Sort from "./comp/sort";
import { ShowMoreButton } from "./comp/showMore";
import { useSelector } from "react-redux";

function App() {
  const resultNumber = useSelector((state: any)=> state.washers.resultNumber)
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
