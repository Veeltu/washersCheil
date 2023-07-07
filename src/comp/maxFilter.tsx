import { useSelector, useDispatch } from "react-redux";
import { updateFilterFunctions } from "../redux/slice";
import { filterCompasity } from "../redux/slice";
import {
  updateFilterClass,
  updateFilteredItems,
  updateProductNotMatch,
} from "../redux/slice";

//TODO: build one big filter

const washers = useSelector((state: any) => state.washers.washers);
const filterFunctionTarget = useSelector(
  (state: any) => state.washers.filterFunctionTarget
);
const filterClassTarget = useSelector(
  (state: any) => state.washers.filterCLassTarget
);
const filterCompasityTarget = useSelector(
  (state: any) => state.washers.filterCompasityTarget
);
const dispatch = useDispatch();

// console.log(`filterFunctionTarget ${filterFunctionTarget}`);
// console.log(`filterClassTarget ${filterClassTarget}`);
// console.log(`filterCompasityTarget ${filterCompasityTarget}`);

/*
if washers includes target => filter, if not => print empty
*/

 function MaxFilter() {
  const afterFilter = washers.functions.includes(filterFunctionTarget)
    ? washers.filter((e: any) => e.includes(filterClassTarget))
    : dispatch(updateProductNotMatch(false)) && 0;
    return afterFilter
}
console.log(MaxFilter)


// function FilterFunctions() {
//   const washers = useSelector((state: any) => state.washers.washers);
//   const functionsList = useSelector(
//     (state: any) => state.washers.functionsList
//   );
//   const dispatch = useDispatch();

//   const handleFilter = (filterValue: string) => {
//     if (filterValue) {
//       const matched = washers.filter((washer: any) =>
//         washer.functions.includes(filterValue)
//       );

//       dispatch(updateFilterFunctions(matched));
//     } else {
//       dispatch(updateFilterFunctions(washers));
//     }
//   };
// }

// function FilterClass() {
//   const washers = useSelector((state: any) => state.washers.washers);
//   const filterFunctions = useSelector(
//     (state: any) => state.washers.filterFunctions
//   );
//   const filteredItems = useSelector(
//     (state: any) => state.washers.filteredItems
//   );
//   const dispatch = useDispatch();

//   const handleFilter = (filterValue: string) => {
//     if (filterValue) {
//       const matched = filterFunctions.filter((washer: any) =>
//         washer.class.includes(filterValue)
//       );
//       if (matched.length != 0) {
//         matched;
//         dispatch(updateProductNotMatch(false));
//       } else {
//         dispatch(updateProductNotMatch(true));
//       }

//       console.log(`matched => ${matched.length}`);

//       dispatch(updateFilterClass(matched));
//     } else {
//       dispatch(updateFilterClass(filterFunctions));
//     }
//   };
// }

// function FilterCapacity() {
//   const washers = useSelector((state: any) => state.washers.washers);
//   const dispatch = useDispatch();

//   const handleFilter = (filterValue: string) => {
//     if (filterValue) {
//       const matched = washers.filter((washer: any) =>
//         washer.capacity.includes(filterValue)
//       );

//       dispatch(filterCompasity(matched));
//     }
//   };
// }
