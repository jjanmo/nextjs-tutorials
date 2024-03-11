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

export interface MovieDetailResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number; logo_path: string; name: string; origin_country: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
export interface MovieVideosResponse {
  id: number;
  results: MovieVideo[];
}
