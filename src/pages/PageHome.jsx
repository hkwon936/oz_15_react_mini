import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies, searchMovies } from "../api/tmdb";

function PageHome() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    const loadMovies = async () => {
      try {
        let data;

        if (!query) {
          data = await fetchPopularMovies(1);
        } else {
          data = await searchMovies(query);
        }
        const filteredMovies = data.results.filter((movie) => !movie.adult);
        setMovies(filteredMovies);
      } catch (error) {
        console.error(error);
      }
    };
    loadMovies();
  }, [query]);

  return (
    <main className="px-6 py-8">
      {movies.length === 0 && query && (
        <p className="mb-4 text-sm text-gray-500">
          &apos;{query}&apos;에 대한 검색 결과가 없습니다.
        </p>
      )}
      <div
        className="
        grid gap-8
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        "
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average?.toFixed(2)} //값이 없을때 발생할 오류를 대비해서 ? 사용
          />
        ))}
      </div>
    </main>
  );
}

export default PageHome;
