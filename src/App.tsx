import { HashRouter, Route, Routes } from "react-router-dom";
import Top from "./features/Top/Top";
import Map from "./features/Map/Map";
import Search from "./features/Search/Search";
import PR from "./features/PR/PR";
import Chie from "./features/Chie/Chie";
import Seikatsu from "./features/Seikatsu/Seikatsu";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<Top isWip={false} />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/seikatsu"} element={<Seikatsu />} />
        <Route path={"/chie"} element={<Chie />} />
        <Route path={"/pr"} element={<PR />} />
        <Route path={"/map"} element={<Map />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
