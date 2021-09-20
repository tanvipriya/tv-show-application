import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDramaTvShowData } from "../../actions/dramaTvShow";
import Header from "../Header/header";
import "./dramaShowComponent.css";

function DramaShowComponent({ match }) {
  /**
   * @desc call dispatch method from react-redux
   */
  const dispatch = useDispatch();

  const dramaShowData = useSelector((state) => state.dramaShowReducer.payload);

  useEffect(() => {
    /**
     * @emit send URL to action through dispatch method
     */
    dispatch(
      getDramaTvShowData(
        `https://api.tvmaze.com/search/shows?q=${match.params.name}`
      )
    );
  }, [dispatch, match.params.name]);

  return (
    <div className="drama-container-wrapper">
      <Header classname="drama" />
      <div className="movie-all-card-loader">
        {dramaShowData
          .map((x) => x.show)
          .map((movie) => {
            return (
              <div className="card-wrapper">
                <div className="image-wrapper">
                  <img className="image" src={movie.image?.medium} alt="" />
                </div>
                <Link
                  to={`shows/${movie.id}`}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="card-content">
                  <div className="card-title">
                    {movie.name} ({movie.premiered.split("-")[0]})
                  </div>
                  <div className="rating-map">
                    {movie.rating.average ? movie.rating.average : "0"}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DramaShowComponent;
