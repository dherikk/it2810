import { searchMovies } from "./__generated__/searchMovies";

/* Types for states for our slices */
export interface IMoviesList {
  movies: searchMovies["getMoviesBySearch"];
  loading: boolean;
  nextPage: number;
  filterSearch: String;
  filterGenre: String[];
  filterDateStart: number;
  filterDateEnd: number;
  sortByCriteria: String;
}

export interface IUserState {
  isLoggedIn: boolean;
  userName: string | undefined; 
}