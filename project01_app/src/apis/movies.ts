import { PopularMoviesResponse, PopularTVsResponse } from '@/interface/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN,
  },
};

interface GetPopularPayload {
  language?: string;
  page?: number;
}
export async function getPopularMovies({ language = 'ko-KR', page = 1 }: GetPopularPayload) {
  const response = await fetch(`${BASE_URL}/movie/popular?language=${language}&page=${page}`, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/movie/popular]`);

  const data = (await response.json()) as PopularMoviesResponse;
  return data;
}

export async function getPopularTVs({ language = 'ko-KR', page = 1 }: GetPopularPayload) {
  const response = await fetch(`${BASE_URL}/tv/popular?language=${language}&page=${page}`, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/tv/popular]`);

  const data = (await response.json()) as PopularTVsResponse;
  return data;
}
