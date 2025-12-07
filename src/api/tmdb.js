const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_READ_ACCESS_TOKEN = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

export const TMDB_HEADERS = {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
};

export async function searchMovies(query, page = 1){
    if(!query){
        return{
            page: 1,
            results: [],
            total_pages: 0,
            total_results: 0,
        };
    }

    const url= `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(
        query
    )}&include_adult=false&language=ko-KR&page=${page}`;

    const response = await fetch(url, {
        method: "GET",
        headers: TMDB_HEADERS,
    });

    if(!response.ok){
        throw new Error(`TMDB 검색 API 호출 실패: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

export { TMDB_BASE_URL, TMDB_READ_ACCESS_TOKEN};