import React from "react";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <LoadingSkeleton className="w-full h-[260px] rounded-lg mb-5"></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold">
          <LoadingSkeleton className="w-full h-[20px] rounded-sm"></LoadingSkeleton>
        </h3>
        <div className="flex justify-between mb-8 text-sm opacity-50 item-center">
          <span>
            <LoadingSkeleton
              width="40px"
              height="10px"
              radius="2px"
            ></LoadingSkeleton>
          </span>
          <div className="flex items-center mt-auto gap-x-1">
            <span>
              <LoadingSkeleton
                width="20px"
                height="10px"
                radius="2px"
              ></LoadingSkeleton>
            </span>
          </div>
        </div>
        <LoadingSkeleton className="w-full h-[40px] rounded-lg"></LoadingSkeleton>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
