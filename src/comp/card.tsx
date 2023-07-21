import VectorArrow from "../assets/VectorArrow.png";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState, useEffect } from "react";
import { updateDisplayedWashers, updateResultNumber } from "../redux/slice";
import { updateProductNotMatch } from "../redux/slice";

interface Washer {
  image:string;
  title:string;
  capacity:string;
  measurements:string;
  functions: Array<string>;
  class:string;
  valid:string;
  price:string;
  rates:string;
  [key: string]: any;
}
interface State {
  washers: {
    productNotMatch: boolean;
    searchedWashers: Washer[];
    sortKey: string;
    numberOfItemsShow: number;
    filterFunctionTarget: string;
    filterClassTarget: string;
    filterCapasityTarget: string;
    filterUsed: boolean;
  };
}

export default function Card() {

  const productNotMatch = useSelector((state: State) => state.washers.productNotMatch);
  const searchedWashers= useSelector((state: State) => state.washers.searchedWashers)
  const key = useSelector((state: State) => state.washers.sortKey);
  const numberOfItemsShow = useSelector((state: State) => state.washers.numberOfItemsShow);
  const filterFunctionTarget = useSelector((state: State) => state.washers.filterFunctionTarget);
  const filterClassTarget = useSelector((state: State) => state.washers.filterClassTarget);
  const filterCapasityTarget = useSelector((state: State) => state.washers.filterCapasityTarget);
  const filterUsed = useSelector((state: State) => state.washers.filterUsed);
  const dispatch = useDispatch();

  const [matched, setMatched] = useState<Washer[]>([]);

  //======= LOGIC

  const handleFilter = () => {
    const match: Washer[] = searchedWashers.filter((item: any) => {
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

    filterUsed === true && match.length == 0
      ? dispatch(updateProductNotMatch(true))
      : (dispatch(updateProductNotMatch(false)), setMatched(match));
  };

  useEffect(() => {
    handleFilter();
  }, [
    filterFunctionTarget,
    filterClassTarget,
    filterCapasityTarget,
    searchedWashers,
  ]);

  const sortedDisplayedWashers = matched.flat().sort((a, b) => a[key] - b[key]);

  useEffect(() => {
    productNotMatch === true ? dispatch(updateResultNumber(0)) : dispatch(updateResultNumber(sortedDisplayedWashers.length)); 
    dispatch(updateDisplayedWashers(sortedDisplayedWashers))
  }, [sortedDisplayedWashers]);

  const itemsToShow = useMemo(() => {
    return sortedDisplayedWashers.slice(0, numberOfItemsShow).map((e: any) => (
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
  }, [sortedDisplayedWashers, numberOfItemsShow]);

  return (
    <>
      {productNotMatch != true ? (
        itemsToShow.length ? (
          itemsToShow
        ) : (
          "Washer not found..."
        )
      ) : (
        <div>
          <h1>filter not matched</h1>
        </div>
      )}
    </>
  );
}
