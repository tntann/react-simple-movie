import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ data }) => {
  const { title, poster_path, release_date, vote_average, id } = data;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[260px] rounded-lg object-cover object-top mb-5 cursor-pointer"
        onClick={() => navigate(`/movie/${id}`)}
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <div className="flex justify-between mb-8 text-sm opacity-50 item-center">
          <span>{new Date(release_date).getFullYear()}</span>
          <div className="flex items-center mt-auto gap-x-1">
            <span>{vote_average.toFixed(1)}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-[#FFDB00]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <button
          onClick={() => navigate(`/movie/${id}`)}
          className="flex items-center justify-center w-full gap-1 px-6 py-3 mt-auto capitalize rounded-lg bg-primary"
        >
          Watch now
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

export default MovieCard;
