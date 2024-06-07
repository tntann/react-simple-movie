import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import TvSeriesPage from "./pages/TvSeriesPage";
// import AnimePage from "./pages/AnimePage";
// import MoviesDetailsPage from "./pages/MoviesDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MoviesDetailsPage = lazy(() => import("./pages/MoviesDetailsPage"));
const TvSeriesPage = lazy(() => import("./pages/TvSeriesPage"));
const AnimePage = lazy(() => import("./pages/AnimePage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
      </Suspense>
    </Fragment>
  );
}

export default App;
