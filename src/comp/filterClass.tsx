import "./search.css";
import { useSelector, useDispatch } from "react-redux";
import { filterClass } from "../redux/slice";

export default function FilterClass() {
  const washers = useSelector((state: any) => state.washers.washers);
  const dispatch = useDispatch();

  const handleFilter = (filterValue: string) => {
    if (filterValue) {
      const matched = washers.filter((washer: any) =>
        washer.class.includes(filterValue)
      );

      dispatch(filterClass(matched));
    } 
  };

  return (
    <div>
        <div className="name-select">
        <h2> Klasa energetyczna: </h2>
      </div>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}
