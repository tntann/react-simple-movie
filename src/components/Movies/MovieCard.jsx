import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const MovieCard = ({ data }) => {
  const { title, poster_path, release_date, vote_average, id } = data;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <img
        src={tmdbAPI.image500(poster_path)}
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
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};

function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong this component
    </p>
  );
}

export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});
