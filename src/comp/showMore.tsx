import { useDispatch, useSelector } from "react-redux";
import { updateNumberOfItemsSow } from "../redux/slice"; // Replace with the correct path to your washers slice file

export const ShowMoreButton = () => {
  const dispatch = useDispatch();
  const numberOfItemsShow = useSelector((state: any) => state.washers.numberOfItemsShow);

  const handleShowMore = () => {
    // const newNumberOfItemsShow = numberOfItemsShow + 3 <= displayedWashers.length ? numberOfItemsShow + 3 : displayedWashers.length;
    const newNumberOfItemsShow = numberOfItemsShow + 3
    dispatch( updateNumberOfItemsSow(newNumberOfItemsShow));
  };

  // if max items on page, how text "thats all"

  return (
    <div className="show-more-button">
      {/* <button onClick={handleShowMore}>Pokaż więcej...</button> */}
      <a onClick={handleShowMore}>Pokaż więcej...</a>
    </div>
  );
};

