import VectorArrow from "../assets/VectorArrow.png";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState, useEffect } from "react";
import { updateResultNumber } from "../redux/slice";
import { updateProductNotMatch } from "../redux/slice";

export default function Card() {
  const productNotMatch = useSelector(
    (state: any) => state.washers.productNotMatch
  );
  const washers = useSelector((state: any) => state.washers.washers);
  const key = useSelector((state: any) => state.washers.sortKey);
  const numberOfItemsShow = useSelector(
    (state: any) => state.washers.numberOfItemsShow
  );
  const filterFunctionTarget = useSelector(
    (state: any) => state.washers.filterFunctionTarget
  );
  const filterClassTarget = useSelector(
    (state: any) => state.washers.filterCLassTarget
  );
  const filterCapasityTarget = useSelector(
    (state: any) => state.washers.filterCapasityTarget
  );
  const filterUsed = useSelector((state: any) => state.washers.filterUsed);
  const dispatch = useDispatch();

  const [match, setMatch] = useState([]);

  useEffect(() => {
    setMatch(washers);
  }, []);

  const handleFilter = () => {
    const match = washers.filter((item: any) => {
      const some =
  
        (filterFunctionTarget !== "#"
          ? item.functions.includes(filterFunctionTarget)
          : true) &&
        (filterCapasityTarget !== "#"
          ? item.capacity.includes(filterCapasityTarget)
          : true) &&
        (filterClassTarget !== "#"
          ? item.class.includes(filterClassTarget)
          : true);

      return some;
    });

    if (filterUsed == true && match.length == 0) {
      console.log("BOOOOM");
      dispatch(updateProductNotMatch(true));
    } else if (filterUsed == true && match.length > 0) {
      dispatch(updateProductNotMatch(false));
      setMatch(match);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [filterFunctionTarget, filterClassTarget, filterCapasityTarget]);

  const sortedSearchedWashers = match.flat().sort((a: any, b: any) => {
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
