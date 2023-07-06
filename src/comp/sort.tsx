import "./filter.css";
import { useDispatch } from "react-redux";
import { sort } from "../redux/slice";


export default function Sort() {
  const dispatch = useDispatch();

  const handleSort = (filterValue: string) => {
    const key = filterValue;
    dispatch(sort(key));
  };

  return (
    <div>
      <div className="name-select">
        <h2> Sortuj po: </h2>
      </div>
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="">All</option>
        <option value="price">price</option>
        <option value="capacity">capacity</option>
      </select>

    
    </div>
  );
}
