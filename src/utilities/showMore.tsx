import { useDispatch, useSelector } from "react-redux";
import { updateNumberOfItemsSow } from "../redux/slice"; 


interface State {
  washers: {
    numberOfItemsShow: number;
    displayedWashers: Array<string>;
  }
}

export const ShowMoreButton = () => {
  const dispatch = useDispatch();
  const numberOfItemsShow = useSelector((state: State) => state.washers.numberOfItemsShow);
  const displayedWashers = useSelector((state: State) => state.washers.displayedWashers);

  const handleShowMore = () => {
    const newNumberOfItemsShow = numberOfItemsShow + 3
    dispatch( updateNumberOfItemsSow(newNumberOfItemsShow));
  };

  return (
    <>
    {displayedWashers.length > numberOfItemsShow
     ? (
    <div className="show-more-button">
      <a onClick={handleShowMore}>Pokaż więcej...</a>
    </div>
    ) : (
      <div className="empty"></div>
    )}
    </>
  );
};

