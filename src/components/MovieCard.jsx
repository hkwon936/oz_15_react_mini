import { Link } from "react-router-dom";

function MovieCard({ id, title, poster, rating }) {
  return (
    <Link to={`/details/${id}`} className="block">
      {/* 항상 Home에서만 렌더링되는 게 아니기 때문에 절대경로(/)를 써야한다 */}
      <article
        className="
        bg-white rounded-lg shadow-md
        overflow-hidden
        cursor-pointer
        transition-transform transition-shadow
        hover: -translate-y-1 hover:shadow-lg
        "
      >
        <div className="w-full h-[260px] overflow-hidden bg-slate-200">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-3 py-3">
          <h3 className="text-sm font-semibold text-gray-900 h-12 overflow-hidden">
            {title}
          </h3>
          <p className="mt-1 text-xs text-gray-500">평점: {rating}</p>
        </div>
      </article>
    </Link>
  );
}

export default MovieCard;
