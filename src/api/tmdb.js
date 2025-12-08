const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_READ_ACCESS_TOKEN = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

const TMDB_HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
};

// 1. 인기 영화
export async function fetchPopularMovies(page=1){ //다른 파일에서 import해서 사용하기 위해 export 사용
  const url = `${TMDB_BASE_URL}/movie/popular?language=ko-KR&page=${page}`;

  const response = await fetch(url, {
    headers: TMDB_HEADERS,
  });

  const data = await response.json(); //fetch로 받은 response를 json 파일로 변환한 값=data
  return data;
}

// 2. 검색
export async function searchMovies(query, page = 1) {
  const url = `${TMDB_BASE_URL}/search/movie?query=${query}&include_adult=false&language=ko-KR&page=${page}`; //성인컨텐츠 검색 제외

  const response = await fetch(url, {
    headers: TMDB_HEADERS,
  });

  const data = await response.json();
  return data;
}

// 3. 상세페이지
export async function fetchMovieDetail(id){
  const url = `${TMDB_BASE_URL}/movie/${id}?language=ko-KR`;

  const response= await fetch(url, {
    headers: TMDB_HEADERS,
  });

  const data=await response.json();
  return data;
}

export { TMDB_BASE_URL, TMDB_READ_ACCESS_TOKEN, TMDB_HEADERS };