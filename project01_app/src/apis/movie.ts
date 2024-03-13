import { MovieDetailResponse, MovieVideosResponse, PopularMoviesResponse } from '@/interface/movie';

const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie';

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN,
  },
};

interface GetMoviePopularPayload {
  language?: string;
  page?: number;
}
export async function getPopularMovies({ language = 'ko-KR', page = 1 }: GetMoviePopularPayload) {
  const response = await fetch(`${MOVIE_BASE_URL}/popular?language=${language}&page=${page}`, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/movie/popular]`);

  const data = (await response.json()) as PopularMoviesResponse;
  return data;
}

interface GetMovieDetailPayload {
  id: number;
  language?: string;
}
export async function getMovieDetail({ id, language = 'ko-KR' }: GetMovieDetailPayload) {
  const response = await fetch(`${MOVIE_BASE_URL}/${id}?language=${language}`, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/movie/${id}]`);

  const data = (await response.json()) as MovieDetailResponse;
  return data;
}

interface GetMovieVideosPayload {
  id: number;
  language?: string;
}
export async function getMovieVideos({ id, language = 'ko-KR' }: GetMovieVideosPayload) {
  const response = await fetch(`${MOVIE_BASE_URL}/${id}/videos?language=${language}`, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/movie/${id}/videos]`);

  const data = (await response.json()) as MovieVideosResponse;
  return data;
}
