import "./search.css";
import { useDispatch } from "react-redux";
import { updateFilterUsed, updateFilterClassTarget } from "../redux/slice";

export default function FilterClass() {
  const dispatch = useDispatch();

  const handleFilter = (filterValue: string) => {
    dispatch(updateFilterClassTarget(filterValue));
    dispatch(updateFilterUsed(true));
  };

  return (
    <div>
      <div className="name-select">
        <h2> Klasa energetyczna: </h2>
      </div>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="#">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}
