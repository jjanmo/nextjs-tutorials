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

export interface TVDetailResponse {
  adult: boolean;
  backdrop_path: string;
  created_by: {
    id: boolean;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
  };
  episode_run_time: number[];
  first_air_date: string;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: number | null;
  };
  name: string;
  next_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_averag: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: null;
    season_number: number;
    show_id: number;
    still_path: null;
  };
  networks: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number; logo_path: string; name: string; origin_country: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
