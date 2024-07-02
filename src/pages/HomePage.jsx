import React, { Fragment } from "react";
import MovieList from "../components/Movies/MovieList";
import Banner from "../components/banner/Banner";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <section className="pb-10 movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold text-white capitalize">
          Now playing
          <div className="w-full h-px mt-1 bg-primary"></div>
        </h2>
        <MovieList type="now_playing"></MovieList>
      </section>

      <section className="pb-10 movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold text-white capitalize">
          Top rated movies
          <div className="w-full h-px mt-1 bg-primary"></div>
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="pb-10 movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold text-white capitalize">
          Trending
          <div className="w-full h-px mt-1 bg-primary"></div>
        </h2>
        <MovieList type="popular"></MovieList>
      </section>

      <section className="pb-10 movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold text-white capitalize">
          Upcoming
          <div className="w-full h-px mt-1 bg-primary"></div>
        </h2>
        <MovieList type="upcoming"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
