function MovieCard({ title, poster, rating }) {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
            <h3>{title}</h3>
            <p>평점: {rating}</p>
        </div>
    );
}

export default MovieCard;