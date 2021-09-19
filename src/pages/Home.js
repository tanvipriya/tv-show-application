import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllShowTvData } from "../actions/showalltv";
import "./style.css";
import Slider from "react-slick";
import MLSlider1 from "../images/ml_slider1.jpeg";

import ShowAllMovieComponent from "../component/showAllMovieComponent";

import Header from "../component/Header/header";
import Footer from "../component/Footer/footer";

function Home() {
  const hostURL = process.env.REACT_APP_TV_SERVER_URL;
  const imageURL = process.env.REACT_APP_TV_IMAGE_SERVER_URL;
  const [allShowData, setAllShowData] = useState([]);
  const [allFiveShowData, setAllFiveShowData] = useState([]);
  const dispatch = useDispatch();

  const homeShowallData = useSelector(
    (state) => state.showAllShowReducer.payload
  );

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
  };

  useEffect(() => {
    dispatch(getAllShowTvData("https://api.tvmaze.com/shows"));
    setAllShowData(homeShowallData);
  }, []);

  let showFiveArray =
    homeShowallData.length > 5 ? homeShowallData.slice(0, 10) : homeShowallData;

  return (
    <div className="home-container-wrapper">
      <Header classname="home" />
      <div className="home-landing-container">
        <div className="home-sliding-container">
          <Slider {...settings}>
            {showFiveArray.map((img) => {
              return (
                <div>
                  <img src={img.image.medium} alt={MLSlider1} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <ShowAllMovieComponent movies={homeShowallData} />
      <Footer />
    </div>
  );
}

export default Home;
