import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <label htmlFor="filter">Filter</label>
      <input
        type="text"
        id="filer"
        name="filter"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
