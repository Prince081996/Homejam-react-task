import React, { Component } from "react";
import Slider from "react-slick";
import UsableCard from "./UsableCard";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {ButtonBase} from '@material-ui/core'
import './styles/Review.css';


export default class Review extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 3,
      infinite:false,
      slidesToScroll: 1,
      

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
          <Slider ref={c => (this.slider = c)} {...settings}>
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
        <div className="buttons" style={{ textAlign: "center", marginLeft:"70em",marginTop:"-22em" }}>
          <ButtonBase className="button" onClick={this.previous}>
          <ArrowBackIcon style={{color:"white"}}/>
          </ButtonBase>
          <ButtonBase className="button" onClick={this.next}>
           <ArrowForwardIcon style={{color:"white"}} />
          </ButtonBase>
          </div>
      </div>
    );
  }
}

