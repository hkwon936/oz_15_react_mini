import { useState } from 'react';
import movieDetailData from '../data/movieDetailData.json';

function MovieDetail() {
    const movie = movieDetailData; //useState 필수사항 아니어서 생략함
    //MovieListPage에서는 useState 사용함.

    return (
        <div className="flex gap-8 p-8">
            <img
                className="w-80 rounded-lg shadow-lg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="flex flex-col justify-start">
                <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
                <p className="text-xl font-semibold mb-2">평점: {movie.vote_average}</p>
                <p className="text-gray-700 leading-relaxed">{movie.overview}</p>
            </div>
        </div>
    );
}

export default MovieDetail;