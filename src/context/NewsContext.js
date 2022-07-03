import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import useFuse from "react-use-fuse";

export const NewsContext = createContext();

const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "e249253a97e7419cae60d44d2a20c7c7";
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2021-05-20&to=2021-05-20&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
