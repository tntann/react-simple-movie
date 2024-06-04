import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiKey, fetcher } from "../../config";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?&api_key=${apiKey}`,
    fetcher
  );
  const movies = data?.results || [];
  // console.log("🚀 ~ Banner ~ movies:", movies);
  return (
    <section className="banner h-[500px] page-container mb-12 overflow-hidden">
      <Swiper
        grabCursor="true"
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem data={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ data }) => {
  const { title, backdrop_path, id } = data;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className="object-cover object-top w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white left-5 bottom-5">
        <h2 className="mb-5 text-3xl font-bold">{title}</h2>
        <div className="flex mb-8 item-center gap-x-3">
          <span className="px-4 py-2 border border-white rounded-md ">
            Action
          </span>
          <span className="px-4 py-2 border border-white rounded-md ">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md ">
            Drama
          </span>
        </div>
        <button
          onClick={() => navigate(`/movie/${id}`)}
          className="flex items-center justify-center gap-1 px-6 py-3 font-medium text-white rounded-lg bg-primary"
        >
          Wacth now
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
