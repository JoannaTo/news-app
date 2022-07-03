import "./App.css";
import News from "./components/News";
import NewsContextProvider from "./context/NewsContext";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import { useState, useContext } from "react";
import NewsContext from "./context/NewsContext";

function App() {
  const [search, setSearch] = useState("");

  return (
    <NewsContextProvider>
      <Wrapper>
        <Header search={search} setSearch={setSearch} />
        <News />
      </Wrapper>
    </NewsContextProvider>
  );
}

export default App;
