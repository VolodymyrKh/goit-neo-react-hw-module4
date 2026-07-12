import { useRef } from "react";
import toast from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = inputRef.current.value.trim();

    if (query === "") {
      toast.error("Please enter a search value!");
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <FiSearch size={18} />
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
