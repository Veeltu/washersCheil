import { useDispatch } from "react-redux";
import { updateFilterCapacityTarget } from "../redux/slice";

export default function FilterCapacity() {
  const dispatch = useDispatch();

  const handleFilter = (filterValue: string) => {
    dispatch(updateFilterCapacityTarget(filterValue));
  };

  return (
    <div>
      <div className="name-select">
        <h2> Pojemność: </h2>
      </div>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="#">Pokaż wszystkie</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10.5">10.5</option>
      </select>
    </div>
  );
}
