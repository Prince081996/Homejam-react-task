import React, { Component } from "react";
import Slider from "react-slick";
import UsableCard from "./UsableCard";
import ForwardArrow from './Arrow/ForwardArrow'
import BackwardArrow from './Arrow/BackwardArrow'
import './styles/Review.css';


export default class Review extends Component {
  state={
    forwCount:0,
    backCount:0
  }
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: (
        <div>
          <div className="next-slick-arrow"> <ForwardArrow/> </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow"><BackwardArrow/> </div>
        </div>
      ),

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 425,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
      }
    return (
      <div className="slider-wrapper">
         <h2 className="reviews">Reviews</h2>
        <Slider {...settings}>
          <div>
            <UsableCard />
          </div>
          <div>
            <UsableCard />
          </div>
          <div>
            <UsableCard />
          </div>
          <div>
            <UsableCard />
          </div>
          <div>
            <UsableCard />
          </div>
          <div>
            <UsableCard />
          </div>
        </Slider>
      </div>
    );
  }
}

