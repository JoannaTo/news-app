import React from "react";
import Navbar from "./Navbar";

const Header = (props) => {
  const { search, setSearch } = props;
  return (
    <div className="header">
      <h2 className="text-center mt-5 news-heading">News</h2>
      <hr className="news-heading-hr" />
      <Navbar search={search} setSearch={setSearch} />
    </div>
  );
};
export default Header;
