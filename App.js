// //   import logo from "./logo.svg";
// import React from "react";
// import "./App.css";
// import Home from "./Components/Home.jsx";
// import About from "./Components/About.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar.jsx";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
// export default App;

import React from "react";
import "./App.css";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
