import "./search.css";
import { useSelector, useDispatch } from "react-redux";
import { filterFunctions } from "../redux/slice";

export default function FilterFunctions() {
  const washers = useSelector((state: any) => state.washers.washers);
  const functionsList = useSelector(
    (state: any) => state.washers.functionsList
  );
  const dispatch = useDispatch();

  const handleFilter = (filterValue: string) => {
    if (filterValue) {
      const matched = washers.filter((washer: any) =>
        washer.functions.includes(filterValue)
      );

      dispatch(filterFunctions(matched));
    }  
  };

  return (
    <div>
        <div className="name-select">
        <h2> Funkcje: </h2>
      </div>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="">All</option>
        {functionsList.map((i: any) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
}
