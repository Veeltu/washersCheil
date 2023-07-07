import "./search.css";
import { useSelector, useDispatch } from "react-redux";
import { filterCompasity, updateFilterCompasityTarget } from "../redux/slice";

export default function FilterCapacity() {
  const washers = useSelector((state: any) => state.washers.washers);
  const dispatch = useDispatch();

  const handleFilter = (filterValue: string) => {
    // if (filterValue) {
    //   const matched = washers.filter((washer: any) =>
    //     washer.capacity.includes(filterValue)
    //   );

    //   dispatch(filterCompasity(matched));
    // } 
    dispatch(updateFilterCompasityTarget(filterValue))
  };

  return (
    <div>
        <div className="name-select">
        <h2> Pojemność: </h2>
      </div>
      <select
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10.5">10.5</option>
      </select>
    </div>
  );
}
