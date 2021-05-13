import ArrowForwardIcon from '@material-ui/icons/ArrowBack';


const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
      style={{color:'white'}}
    >
     <ArrowForwardIcon />
    </button>
  );

  export default SlickArrowLeft