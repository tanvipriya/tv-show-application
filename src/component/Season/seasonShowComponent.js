import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSeasonTvShowData } from "../../actions/seasonTvShow";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./seasonShowComponent.css";

function SeasonShowComponent({ match }) {
  const dispatch = useDispatch();

  const seasonShowData = useSelector(
    (state) => state.seasonShowReducer.payload
  );

  useEffect(() => {
    dispatch(
      getSeasonTvShowData(`https://api.tvmaze.com/shows/${match.params.id}`)
    );
  }, []);

  return (
    <div className="season-container-wrapper">
      <Header classname="season" />
      <div className="season-landing-container">
        <div className="season-landing-container--image-holder">
          <img src={seasonShowData?.image?.original} alt="Season Story"></img>
        </div>
        <div className="season-landing-container--text-container">
          <h1>
            <Link to="http://www.cwtv.com/shows/the-100/">
              {seasonShowData?.name}
            </Link>
            <div className="rating-map">{seasonShowData?.rating?.average}</div>
          </h1>
          <span className="season-landing-container--subtitle">
            {seasonShowData?.summary}
          </span>
          <div>
            <div className="season-landing-container--language-contaner">
              <span className="season-landing-container--language">
                Language : {seasonShowData.language}
              </span>
              <span className="season-landing-container--language">
                Schedule: {seasonShowData?.schedule?.day}{" "}
                {seasonShowData?.schedule?.time}
              </span>
            </div>
            <div className="season-landing-container--network">
              <span className="season-landing-container--languages">
                Network : {seasonShowData?.network?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SeasonShowComponent;
