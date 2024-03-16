import { MovieDetailResponse, PopularMoviesResponse } from '@/interface/movie';

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
export async function getPopularMovies({ language = 'en-US', page = 1 }: GetMoviePopularPayload) {
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
export async function getMovieDetail({ id, language = 'en-US' }: GetMovieDetailPayload) {
  const response = await fetch(`${MOVIE_BASE_URL}/${id}?language=${language}&append_to_response=videos,images`, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/movie/${id}]`);

  const data = (await response.json()) as MovieDetailResponse;
  return data;
}
