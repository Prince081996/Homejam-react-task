import React, { Component } from "react";
import Slider from "react-slick";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PercentageCircle from './CustomCircles/PercentageCircle'
// import './styles/CircleSlider.css'
import Circles from "./Circles";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow:<ArrowForwardIcon />,
      prevArrow:<ArrowBackIcon />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.5,
            infinite: false,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="card-wrapper">
        <Slider {...settings}>
          <div>
            <PercentageCircle index={0} />
          </div>
          <div className="circles">
            <Circles index={1} count={745} />
          </div>
          <div>
            <Circles index={1} count={1000} />
          </div>
          <div>
            <Circles index={1} count={792} />
          </div>
        </Slider>
      </div>
    );
  }
}
