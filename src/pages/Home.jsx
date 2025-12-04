import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const token = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;
console.log(import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN);

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};
    fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
    .then(res => res.json())
    .then(data => {
        setMovies(data.results);
    })
    .catch(err => console.error(err));
}, []);
    
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    rating={movie.vote_average.toFixed(2)}
                />
            ))}
        </div>
    );
}

export default Home;