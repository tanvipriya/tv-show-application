import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./showAllMovieComponent.css";
import SearchBar from "./searchbar";

function ShowAllMovieComponent(movies) {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  const filterNames = ({ name }) => {
    return name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  };

  const showPageHandler = (id) => {
    const redirect = `shows/${id}`;
    history.replace("", redirect);
  };
  return (
    <React.Fragment>
      <div className="movie-all-container-wrapper">
        <div className="movie-all-card-serach">
          <div className="movie-card-searchValue">
            <h1 className="movie-card-searchValue--title">Lorem Ipsum</h1>
            <p className="movie-card-searchValue--subtitle">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
            <SearchBar
              onSearch={setSearchValue}
              value={searchValue}
              className="card-searchValue"
            />
          </div>
        </div>
        <div className="movie-all-card-loader">
          {movies.movies.filter(filterNames).map((movie) => {
            const { id, image, name, premiered, rating } = movie;
            return (
              <div className="card-wrapper">
                <div className="image-wrapper">
                  <img className="image" src={image.medium} />
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
    </React.Fragment>
  );
}

export default ShowAllMovieComponent;
