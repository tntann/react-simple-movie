import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../components/Movies/MovieCard";

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${apiKey}`,
    fetcher
  );

  // console.log("🚀 ~ MoviesDetailsPage ~ data:", data);
  if (!data) return null;
  // if (error) return <div>failed to load</div>;
  const { backdrop_path, title, genres, overview } = data;
  return (
    <div className="py-10 page-container">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 overplay"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path})`}
          className="object-cover object-top w-full h-full rounded-lg"
          alt=""
        />
      </div>
      <h1 className="mb-10 text-4xl font-bold text-center text-white">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex justify-center mb-10 item-center gap-x-5">
          {genres.map((item) => (
            <span
              className="px-4 py-2 border rounded-md border-primary text-primary"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

const MovieCredits = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?&api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10 page-container">
      <h2 className="mb-10 text-3xl font-bold text-center">Casts</h2>
      <div className="grid grid-cols-4 gap-10">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path})`}
              alt=""
              className="w-full h-[400px] object-cover rounded-lg mb-3 object-top"
            />
            <h3 className="text-xl font-medium text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieVideos = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?&api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10 page-container">
      {results?.slice(0, 1)?.map((item) => (
        <div key={item.id}>
          <h3 className="mb-10 text-2xl font-semibold text-center">
            {item.name}
          </h3>
          <div className="flex items-center justify-center w-full aspect-video">
            <iframe
              className="object-fill w-full h-full"
              width="864"
              height="486"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="Youtube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

const MovieSimilar = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?&api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10 page-container">
      <h2 className="mb-10 text-3xl font-semibold">
        Similar movies
        <div className="mt-1 border border-primary"></div>
      </h2>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard data={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MoviesDetailsPage;
