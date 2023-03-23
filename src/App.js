import "./App.scss";
import Slider from "./components/Slider/Slider";
import { Link, Routes, Route, HashRouter } from "react-router-dom";
import { images } from "./images";

function App() {
  return (
    <div className="App">
      <h1>Hola amigos!</h1>
      <HashRouter>
        <div className="links">
          <Link to="/">Home</Link>
          <br />
          <Link to="/slides">Slides</Link>
        </div>

        <Routes>
          <Route path='/' element={<></>}></Route>
          <Route path='/slides' element={<Slider images={images} />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
