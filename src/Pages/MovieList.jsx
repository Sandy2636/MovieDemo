import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./movieList.scss";
import { useStateValue } from "./Context/StateProvider";

function MovieList() {
  const [state, dispatch] = useStateValue();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const getMovieData = async () => {
      try {
        const res = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setMovieList(res.data);
        localStorage.setItem("MovieList", res.data);
        console.log("Responce Data:", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovieData();
  }, []);

  const getMovieInfo = (index) => {
    dispatch({
      type: "MOVIE_SELECTED",
      item: movieList[index],
    });
  };

  console.log("Movie Data:", movieList);

  return (
    <div className="movieList">
      <div className="movieListContainer">
        {movieList.map((data, index) => (
          <div
            className="movieItem"
            onClick={() => {
              getMovieInfo(index);
            }}
          >
            <Link className="link" to={`/movie`}>
              <img className="movieImage" src={data.show.image.medium} alt="" />
              <p className="movieTitle">{data.show.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
