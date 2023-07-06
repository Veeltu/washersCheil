import VectorArrow from "../assets/VectorArrow.png";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { updateResultNumber } from "../redux/slice";

export default function Card() {
  const washers = useSelector((state: any) => state.washers.washers);
  const key = useSelector((state: any) => state.washers.sortKey);
  const searchedWashers = useSelector(
    (state: any) => state.washers.searchedWashers
  );
  const numberOfItemsShow = useSelector(
    (state: any) => state.washers.numberOfItemsShow
  );
  const dispatch = useDispatch();

  const sortedWashers = [...washers].sort((a: any, b: any) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });

  const sortedSearchedWashers = [...searchedWashers]
    .flat()
    .sort((a: any, b: any) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });

  const displayedWashers =
    searchedWashers.length === 0 ? sortedWashers : sortedSearchedWashers;

    dispatch(updateResultNumber(displayedWashers.length))

  const itemsToShow = useMemo(() => {
    return displayedWashers.slice(0, numberOfItemsShow).map((e) => (
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

  return (
    <>
      {itemsToShow.length ? itemsToShow : "Loading..."}
    </>
  );
}
