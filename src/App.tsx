import { HashRouter, Route, Routes } from "react-router-dom";

import Chie from "./features/Chie/Chie";
import Map from "./features/Map/Map";
import PR from "./features/PR/PR";
import Search from "./features/Search/Search";
import Seikatsu from "./features/Seikatsu/Seikatsu";
import Top from "./features/Top/Top";

// const ScrollManager = () => {
//   const { pathname, hash } = useLocation();
//   const previousPath = useRef(pathname);

//   useLayoutEffect(() => {
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }

//     // 同一ページ内（hashのみ変化）は無視
//     if (pathname === previousPath.current) return;
//     previousPath.current = pathname;

//     // ページ遷移時に強制的にトップに戻す
//     window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
//   }, [pathname, hash]);

//   return null;
// };

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
