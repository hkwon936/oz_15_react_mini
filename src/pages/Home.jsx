import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import movieListData from '../data/movieListData.json';

function MovieListPage() {
    const [movies] = useState(movieListData.results); //영화 데이터는 변하지 않는 정적 데이터기 때문에 setMovies 사용 안함
    //변하지 않는 데이터이기 때문에 const movies = movieListData.results; 도 가능하지만 useState를 사용하라는 요구사항에 맞춤

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

export default MovieListPage;