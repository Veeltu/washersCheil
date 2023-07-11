import { useSelector, useDispatch } from "react-redux";
import { updateFilterUsed, updateFilterFunctionTarget } from "../redux/slice";

interface State {
  washers: {
    functionsList: string[];
  }
}

export default function FilterFunctions() {
  const functionsList = useSelector(
    (state: State) => state.washers.functionsList
  );
  const dispatch = useDispatch();

  const handleFilter = (filterValue: string) => {
    dispatch(updateFilterFunctionTarget(filterValue));
    dispatch(updateFilterUsed(true));
  };

  return (
    <div>
      <div className="name-select">
        <h2> Funkcje: </h2>
      </div>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="#">Pokaż wszystkie</option>
        {functionsList.map((i: any) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
}
