import { useState } from 'react';
import MovieCard from './components/MovieCard';
import movieListData from './data/movieListData.json';

function App() {
    const [movies, setMovies] = useState(movieListData.results);

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    rating={movie.vote_average}
                />
            ))}
        </div>
    );
}

export default App;