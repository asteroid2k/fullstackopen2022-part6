import { connect } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
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

const mapDispatchToProps = {
  setFilter,
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
