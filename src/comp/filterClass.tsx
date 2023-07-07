import "./search.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFilterClass,
  updateFilterClassTarget,
  updateFilteredItems,
  updateProductNotMatch,
} from "../redux/slice";

export default function FilterClass() {
  const washers = useSelector((state: any) => state.washers.washers);
  const filterFunctions = useSelector(
    (state: any) => state.washers.filterFunctions
  );
  const filteredItems = useSelector(
    (state: any) => state.washers.filteredItems
  );
  const dispatch = useDispatch();

  //BUG: second filter class using filteredItems so if there where 2 items, second filter is starting from these 2
  //        => if filter agine to do agine from filterFunctions not from final filteredItems
  //BUG: reset filters somehow
  //BUG: if second filter not match anny show info : not here don't exist
  //BUG: if not find SAY NOT FIND !
  //        => pass component from slice with EMPYT ?
  //        => or pass 0 or null to filteredItems na if = 0 {}
  // going back from second filter to first one = BIG ONE
  //        => remember second and third filter, or reset them
  //        => becouse i pass from filter arrays. I shoud pass only filter item, and do includes elsewere
  //            in that cas, I shoud be able to "remember" filters and build one filter logic not 4 or 5

  const handleFilter = (filterValue: string) => {
    // if (filterValue) {
    //   const matched = filterFunctions.filter((washer: any) =>
    //     washer.class.includes(filterValue)
    //   );
    //   if (matched.length != 0) {
    //     matched;
    //     dispatch(updateProductNotMatch(false));
    //   } else {
    //     dispatch(updateProductNotMatch(true));
    //   }

    //   console.log(`matched => ${matched.length}`);

    //   dispatch(updateFilterClass(matched));
    // } else {
    //   dispatch(updateFilterClass(filterFunctions));
    // }
    dispatch(updateFilterClassTarget(filterValue))
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
