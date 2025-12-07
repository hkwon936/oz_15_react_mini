import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { TMDB_BASE_URL, TMDB_HEADERS, searchMovies } from "../api/tmdb";

function PageHome() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!query) {
          const response = await fetch(
            `${TMDB_BASE_URL}/movie/popular?language=ko-KR&page=1`,
            {
              method: "GET",
              headers: TMDB_HEADERS,
            }
          );
          if (!response.ok) {
            throw new Error(`인기 영화 API 호출 실패: ${response.status}`);
          }
          const data = await response.json();
          const filteredMovies = data.results.filter((movie) => !movie.adult);
          setMovies(filteredMovies); // 리렌더링 될 state로 반환
        } else {
          const data = await searchMovies(query);
          const filteredMovies = data.results.filter((movie) => !movie.adult);
          setMovies(filteredMovies);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
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
