import "./search.css";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../redux/slice";

export default function Search() {
  const washers = useSelector((state: any) => state.washers.washers);
  const dispatch = useDispatch();

  // const functionsList = useSelector((state: any) => state.washers.functionsList);
  
  const handleSearch = (e: any) => {
    if (e.target.value) {
      const searchText = e.target.value;
      const matched = washers.filter((i: any) =>
        i.title.toLowerCase().includes(searchText.toLowerCase())
      );

      dispatch(search(matched));
    } else {
      dispatch(search(washers));
    }
  };

  return (
    <>
        <div className="search">
          <form id="form" role="search">
            <input
              type="search"
              id="query"
              name="q"
              placeholder="Search..."
              aria-label="Search through site content"
              onChange={handleSearch}
            />
          </form>
        </div>
    </>
  );
}
