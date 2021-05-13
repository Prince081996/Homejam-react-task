import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
      style={{color:'white'}}
    >
      <ArrowForwardIcon />
    </button>
  );

  export default SlickArrowRight