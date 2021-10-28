import { FunctionComponent, useEffect } from "react";
import {
  selectNextPage,
  selectFilterSearch,
  selectFilterGenre,
  selectFilterDateStart,
  selectFilterDateEnd,
  selectSortByCriteria,
} from "./selectors";
import { useSelector } from "react-redux";
import MovieService from "../services/index";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar/SideBar";
import { Dispatch } from "redux";
import { setMovies } from "./mainPageSlice";
import { searchMovies } from "../services/__generated__/searchMovies";
import { useAppDispatch } from "../services/hooks";
import { Row, Col } from "react-bootstrap";
import CustomizedTables from "../components/movies";
import "./MainPage.css";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import SortDropDown from "../components/sortdropdown";

const actionDispatch = (dispatch: Dispatch) => ({
  setMovies: (movies: searchMovies["getMoviesBySearch"]) =>
    dispatch(setMovies(movies)),
});

export const MainPage: FunctionComponent = () => {
  const nextPage = useSelector(selectNextPage);
  const filterSearchQuery = useSelector(selectFilterSearch);
  const filterGenre = useSelector(selectFilterGenre);
  const filterDateStart = useSelector(selectFilterDateStart);
  const filterDateEnd = useSelector(selectFilterDateEnd);
  const sortByCriteria = useSelector(selectSortByCriteria);

  const { setMovies } = actionDispatch(useAppDispatch());

  const fetchMovies = async () => {
    const movies = await MovieService.getMoviesBySearch(
      nextPage,
      filterSearchQuery,
      filterGenre,
      filterDateStart,
      filterDateEnd,
      sortByCriteria
    ).catch((error) => {
      console.log("Error", error);
    });

    if (movies) {
      console.log("setmovies mainpage");
      setMovies(movies);
    }
  };

  function fetchMore() {
    console.log("bottomscroll fetchmovies");
    fetchMovies();
  }

  useEffect(() => {
    fetchMovies();
  }, [
    filterSearchQuery,
    filterGenre,
    filterDateStart,
    filterDateEnd,
    sortByCriteria,
  ]);

  return (
    <>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <div className="innercontainer">
        <SideBar />
        <div className="moviecontainer">
          <SortDropDown />
          <BottomScrollListener onBottom={fetchMore} />
          <CustomizedTables />
        </div>
      </div>
    </>
  );
};

export default MainPage;
