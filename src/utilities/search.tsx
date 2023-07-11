import "../search.css";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../redux/slice";

interface Washer {
  image: string;
  title: string;
  capacity: string;
  measurements: string;
  functions: Array<string>;
  class: string;
  valid: string;
  price: string;
  rates: string;
}

interface State {
  washers: {
    washers: Washer[];
  };
}

export default function Search() {
  const washers = useSelector((state: State) => state.washers.washers);
  const dispatch = useDispatch();

  const handleSearch = (e: any) => {
    if (e.target.value) {
      const searchText = e.target.value;
      const matched = washers.filter((i: any) =>
        i.title.toLowerCase().includes(searchText.toLowerCase())
      );
      dispatch(search(undefined));
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
