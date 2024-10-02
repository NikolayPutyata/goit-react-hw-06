import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <p>Finds contacts by name</p>
      <input type="text" value={value} onChange={handleChange} name="query" />
    </>
  );
};

export default SearchBox;
