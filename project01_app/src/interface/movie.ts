export type Media = Movie | TV;
export interface MediaBase {
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  popularity: number;
  genre_ids: number[];
  id: number;
  original_language: string;
  vote_average: number;
  vote_count: number;
}
export interface Movie extends MediaBase {
  original_title: string;
  title: string;
  release_date: string;
  video: boolean;
}
export interface TV extends MediaBase {
  original_name: string;
  name: string;
  first_air_date: string;
  origin_country: string[];
}

export interface PopularMoviesResponse {
  page: number;
  results: Omit<Movie, 'type'>[];
  total_pages: number;
  total_results: number;
}
export interface PopularTVsResponse {
  page: number;
  results: Omit<TV, 'type'>[];
  total_pages: number;
  total_results: number;
}
