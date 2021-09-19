import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDramaTvShowData } from "../../actions/dramaTvShow";
import Header from "../Header/header";
import "./dramaShowComponent.css";

function DramaShowComponent({ match }) {
  console.log("match", match);
  const dispatch = useDispatch();

  const dramaShowData = useSelector((state) => state.dramaShowReducer.payload);

  useEffect(() => {
    dispatch(
      getDramaTvShowData(
        `https://api.tvmaze.com/search/shows?q=${match.params.name}`
      )
    );
    // setAllShowData(data);
  }, [dispatch, match.params.name]);

  return (
    <div className="drama-container-wrapper">
      <Header classname="drama" />
      {/* <ShowAllMovieComponent movies={data} /> */}
      <div className="movie-all-card-loader">
        {dramaShowData
          .map((x) => x.show)
          .map((movie) => {
            const { id, image, name, premiered, rating } = movie;
            return (
              <div className="card-wrapper">
                <div className="image-wrapper">
                  <img className="image" src={image?.medium} alt="" />
                </div>
                <Link
                  to={`shows/${id}`}
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
                    {/* movies */}
                    {name} ({premiered.split("-")[0]})
                  </div>
                  <div className="rating-map">
                    {rating.average ? rating.average : "0"}
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
