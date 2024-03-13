import { PopularTVsResponse } from '@/interface/movie';
import { TVDetailResponse } from '@/interface/tv';

const TV_BASE_URL = 'https://api.themoviedb.org/3/tv';

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN,
  },
};

interface GetTVPopularPayload {
  language?: string;
  page?: number;
}
export async function getPopularTVs({ language = 'ko-KR', page = 1 }: GetTVPopularPayload) {
  const response = await fetch(`${TV_BASE_URL}/tv/popular?language=${language}&page=${page}`, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/tv/popular]`);

  const data = (await response.json()) as PopularTVsResponse;
  return data;
}

interface GetTVDetailPayload {
  id: number;
  language?: string;
}
export async function getTVDetail({ id, language = 'ko-KR' }: GetTVDetailPayload) {
  const response = await fetch(`${TV_BASE_URL}/${id}?language=${language}`, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/tv/${id}]`);

  const data = (await response.json()) as TVDetailResponse;
  return data;
}
