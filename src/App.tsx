import { BrowserRouter, Route, Routes } from "react-router-dom";

import Chie from "./features/Chie/Chie";
import Map from "./features/Map/Map";
import PR from "./features/PR/PR";
import Search from "./features/Search/Search";
import Seikatsu from "./features/Seikatsu/Seikatsu";
import Top from "./features/Top/Top";

const App = () => {
  //const basename = import.meta.env.BASE_URL;
  const basename =
    import.meta.env.BASE_URL === "./" ? "/" : import.meta.env.BASE_URL;
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path={"/"} element={<Top isWip={false} />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/seikatsu"} element={<Seikatsu />} />
        <Route path={"/chie"} element={<Chie />} />
        <Route path={"/pr"} element={<PR />} />
        <Route path={"/map"} element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
