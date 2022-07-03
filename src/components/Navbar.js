import React, { useContext } from "react";
import NewsContext from "../context/NewsContext";

const Navbar = (props) => {
  const { setSearch } = props;
  return (
    <nav className="navbar navbar-light mt-3 mb-3">
      <div className="container-fluid justify-content-center">
        <form className="d-flex">
          <input
            className="form-control me-2 searchInput"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn searchBtn" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
