/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchMovies
// ====================================================

export interface searchMovies_getMoviesBySearch {
  __typename: "Movie";
  title: string | null;
  genres: (string | null)[] | null;
  release_date: number | null;
  overview: string | null;
  poster: string | null;
}

export interface searchMovies {
  getMoviesBySearch: (searchMovies_getMoviesBySearch | null)[] | null;
}

export interface searchMoviesVariables {
  page?: number | null;
  searchGenre?: (string | null)[] | null;
  searchQuery?: string | null;
  searchDateStart?: number | null;
  searchDateEnd?: number | null;
}
