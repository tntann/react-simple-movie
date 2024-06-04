import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import TvSeriesPage from "./pages/TvSeriesPage";
import AnimePage from "./pages/AnimePage";
import MoviesDetailsPage from "./pages/MoviesDetailsPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MoviesDetailsPage></MoviesDetailsPage>}
          ></Route>
          <Route
            path="tvseries"
            element={<TvSeriesPage></TvSeriesPage>}
          ></Route>
          <Route path="anime" element={<AnimePage></AnimePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
