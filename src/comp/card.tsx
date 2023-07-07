import VectorArrow from "../assets/VectorArrow.png";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState, useEffect } from "react";
import { updateFilterFunctions, updateResultNumber } from "../redux/slice";
import { updateFilteredItems } from "../redux/slice";

import {
  updateFilterClass,
  updateProductNotMatch,
} from "../redux/slice";

export default function Card() {
  const productNotMatch = useSelector(
    (state: any) => state.washers.productNotMatch
  );
  const washers = useSelector((state: any) => state.washers.washers);
  const key = useSelector((state: any) => state.washers.sortKey);
  const searchedWashers = useSelector(
    (state: any) => state.washers.searchedWashers
  );
  const numberOfItemsShow = useSelector(
    (state: any) => state.washers.numberOfItemsShow
  );
  const filterFunctions = useSelector(
    (state: any) => state.washers.filterFunctions
  );
  const filterClass = useSelector((state: any) => state.washers.filterClass);
  const filterCompasity = useSelector(
    (state: any) => state.washers.filterCompasity
  );
  const filteredItems = useSelector(
    (state: any) => state.washers.filteredItems
  );
  const filterFunctionTarget = useSelector((state: any) => state.washers.filterFunctionTarget)
  const filterClassTarget = useSelector((state: any) => state.washers.filterCLassTarget)
  const filterCompasityTarget = useSelector((state: any) => state.washers.filterCompasityTarget)
  
  const dispatch = useDispatch();

useEffect(() => {
    dispatch(updateFilteredItems(washers));
    dispatch(updateFilterFunctions(washers))
  }, []);

  //1 step-filter
  useEffect(() => {
    filterFunctions.length !== 0
    ? dispatch(updateFilteredItems(filterFunctions))
    : {};
  }, [filterFunctions]);
  //2 setp-filter
  useEffect(() => {
    if (filterClass.length !== 0) dispatch(updateFilteredItems(filterClass));
  }, [filterClass]);
  //3 step-filter
  useEffect(() => {
    if (filterCompasity.length !== 0)
    dispatch(updateFilteredItems(filterCompasity));
  }, [filterCompasity]);
  
  // console.log(`filterClass ${filterClass.length}`)
  // console.log(`filteredItems => ${filteredItems.length}`);
  // console.log(`filterFunctions => ${filterFunctions.length}`)

  const sortedSearchedWashers = filteredItems.flat().sort((a: any, b: any) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });

  const displayedWashers = sortedSearchedWashers;

  useEffect(() => {
    dispatch(updateResultNumber(displayedWashers.length));
  }, [displayedWashers.length]);

  const itemsToShow = useMemo(() => {
    return displayedWashers.slice(0, numberOfItemsShow).map((e: any) => (
      <div className="card" key={Math.random()}>
        <div className="image-container">
          <img src={e.image} id="img" />
        </div>
        <div className="title">
          <h2>{e.title}</h2>
        </div>
        <div className="details-box">
          <ul>
            <li>
              Pojemn ość (kg):<span>{e.capacity}</span>
            </li>
            <li>
              Wymiary (Gx5xW):<span> {e.measurements}</span>
            </li>
            <li>
              Funkcje:<span> {e.functions.join(", ")}</span>
            </li>
          </ul>
        </div>
        <div className="class-box">
          <div className="klasa">
            <h3>Klasa energetyczna</h3>
          </div>
          <div className="energy-class">
            <img className="arrow" src={VectorArrow} alt="arrow"></img>
            <div className="class">{e.class}</div>
          </div>
        </div>
        <div className="price-box">
          <h3>Cena obowiązuje: {e.valid}</h3>
          <div className="price">
            {e.price}
            <div className="zl">00 zł</div>
          </div>
        </div>
        <div className="rates">{e.rates}</div>
        <div className="button">
          <button>WYBIERZ</button>
        </div>
      </div>
    ));
  }, [displayedWashers, numberOfItemsShow]);

  // {itemsToShow.length ? itemsToShow : "Loading..."}
// =============================================================  

function MaxFilter() {

  const filter = washers.filter((e: any) => {
    e.functions.includes(filterFunctionTarget)
  })
  return filter
}

console.log(`filterFunctionTarget => ${filterFunctionTarget}`)
console.log(`maxfilter ===> ${MaxFilter()}`)
 
  return (
    <>
      {productNotMatch != true ? (
        itemsToShow.length ? (
          itemsToShow
        ) : (
          "Loading..."
        )
      ) : (
        <div>
          <h1>filter not match</h1>
        </div>
      )}
    </>
  );
}
