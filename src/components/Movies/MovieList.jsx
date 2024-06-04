import React from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
//https://api.themoviedb.org/3/movie/now_playing?&api_key=247c6a0e12abe3d34fcf5e59c2032141

const MovieList = ({ type = "now_playing" }) => {
  // const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?&api_key=${apiKey}`,
    fetcher
  );
  const movies = data?.results || [];
  // useEffect(() => {
  //   if (data && data.results) setMovies(data.results);
  // }, [data]);
  // console.log(movies);

  return (
    <div className="select-none movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard data={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
