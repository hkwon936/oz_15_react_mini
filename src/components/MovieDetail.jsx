import { useState } from 'react';
import movieDetailData from '../data/movieDetailData.json';

function MovieDetail() {
    const movie = movieDetailData; //useState 필수사항 아니어서 생략함
    //MovieListPage에서는 useState 사용함.

    return (
        <div className="detail-container">
            <div className="detail-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>

            <div className="detail-right">
                <div className="detail-row">
                    <div className="detail-title-box">
                        <h2>{movie.title}</h2>
                    </div>
                    <div className="detail-rating-box">
                        <p>평점: {movie.vote_average.toFixed(2)}</p>
                    </div>
                </div>

                <div className="detail-genre">
                    <p className="detail-label">장르</p>
                    <p>
                        {movie.genres
                            ? movie.genres.map((genre) => genre.name).join(', ')
                            : movie.genre || '장르 정보 없음'}
                    </p>
                </div>

                <div className="detail-overview">
                    <p className="detail-label">줄거리</p>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;