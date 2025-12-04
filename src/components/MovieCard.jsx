import { Link } from 'react-router-dom';

function MovieCard({ title, poster, rating }) {
    return (
        <Link to="/details">
            <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
                <h3>{title}</h3>
                <p>평점: {rating}</p>
            </div>
        </Link>
    );
}

export default MovieCard;