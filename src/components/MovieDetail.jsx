import { useState, useEffect } from "react";
import { fetchMovieDetail } from "../api/tmdb";

function MovieDetail({ id }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieDetail(id);
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/2">
          <div className="w-full aspect-3/4 overflow-hidden rounded-lg shadow-md bg-neutral-200">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="flex-1 rounded-md border border-gray-200 px-4 py-3">
              <h2 className="text-xl font-semibold leading-snug">
                {movie.title}
              </h2>
            </div>
            <div className="w-28 rounded-md border border-gray-200 px-3 py-3 flex items-center justify-center">
              <p className="text-sm font-semibold text-gray-800">
                평점: {movie.vote_average?.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="rounded-md border border-gray-200 px-4 py-3">
            <p className="text-xs font-semibold text-gray-500 mb-1">장르</p>
            <p className="text-sm text-gray-800">
              {movie.genres && movie.genres.length > 0
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "장르 정보 없음"}
            </p>
          </div>

          <div className="rounded-md border border-gray-200 px-4 py-3 flex-1">
            <p className="text-xs font-semibold text-gray-500 mb-1">줄거리</p>
            <p className="text-sm leading-relaxed text-gray-800">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
