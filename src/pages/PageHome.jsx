import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const token = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

function PageHome() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data.results.filter((movie) => !movie.adult);
        setMovies(filteredMovies); // 리렌더링 될 state로 반환
      })
  }, []);

  return (
    <main className="px-6 py-8">
      <div className="
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
           rating={movie.vote_average.toFixed(2)}
          />
        ))}
      </div>
    </main>
  );
}

export default PageHome;
