import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

function SearchBox() {
  const filterValue = useSelector((state) => state.filters.filterValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <label htmlFor="filter" className={css.label}>
        Find Contact
      </label>
      <input
        id="filter"
        value={filterValue}
        name="filter"
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
}

export default SearchBox;
