// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { HashRouter, Route, Routes } from "react-router-dom";
import Top from "./features/Top/Top";
import Map from "./features/Map/Map";
import Search from "./features/Search/Search";
import { REPOSITORY_NAME } from "./constants";

//const REPOSITORY_NAME: String = "portfolio";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<Top isWip={true} />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={`${REPOSITORY_NAME}/map`} element={<Map />} />
      </Routes>
    </HashRouter>
  );
};

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

export default App;
