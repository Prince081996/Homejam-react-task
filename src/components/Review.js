import React, { Component } from "react";
import Slider from "react-slick";
import UsableCard from "./UsableCard";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './styles/Review.css'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      // infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: (
        <div>
          <div className="next-slick-arrow"> <ArrowForwardIcon/> </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow"><ArrowBackIcon /> </div>
        </div>
      )
    };
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



// const Review = () => {
//   return (
//     <MDBContainer>
//       <MDBCarousel
//         activeItem={1}
//         length={3}
//         showControls={true}
//         showIndicators={false}
//         className="z-depth-1"
//         slide
//       >
//         <MDBCarouselInner>
//           <MDBCarouselItem itemId="1">
//             <MDBView>
//             {/* <UsableCard />
//             <UsableCard />
//             <UsableCard /> */}
//              <img
//                 className="d-block w-100"
//                 src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
//                 alt="First slide"
//               />
//             </MDBView>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId="1">
//             <MDBView>
//             <img
//                 className="d-block w-100"
//                 src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
//                 alt="First slide"
//               />
//             </MDBView>
//           </MDBCarouselItem>
//         </MDBCarouselInner>
//       </MDBCarousel>
//     </MDBContainer>
//   );
// }

// export default Review;
