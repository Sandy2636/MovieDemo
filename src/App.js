import logo from "./logo.svg";
import "./App.css";
import MovieList from "./Pages/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";

function App() {
  // primary: #2b2d42
  // scBG :#8d99ae
  // crdBG : #edf2f4
  // subHead :#ef233c
  // head : #d90429
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
