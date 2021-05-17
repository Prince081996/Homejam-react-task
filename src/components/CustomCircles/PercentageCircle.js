import React, { Component } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import '../styles/PercentageCircle.css'


class PercentageCircle extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.percent)
    const percent = props.percent;
    let leftTransformerDegree = '0deg';
    let rightTransformerDegree = '0deg';
    if (percent >= 50) {
      rightTransformerDegree = '180deg';
      leftTransformerDegree = (percent - 50) * 3.6 + 'deg';
    } else {
      rightTransformerDegree = percent * 3.6 + 'deg';
      leftTransformerDegree = '0deg';
    }
    this.state = {
      percent: this.props.percent,
      borderWidth: this.props.borderWidth < 2 || !this.props.borderWidth ? 2 : this.props.borderWidth,
      leftTransformerDegree: leftTransformerDegree,
      rightTransformerDegree: rightTransformerDegree,
    };
  }
  render() {
    return (
      <div
        className="circle"
        style={{
          width: this.props.radius * 2,
          height: this.props.radius * 2,
          borderRadius: this.props.radius,
          backgroundColor: this.props.bgcolor,
          color:this.props.color,
          opacity:this.props.opacity,
        }}
      >
        <div
          className="left-wrap"
          style={{
            width: this.props.radius,
            height: this.props.radius * 2,
            left: 0,
          }}
        >
          <div
            className="loader"
            id="id1"
            style={{
              left: this.props.radius,
              width: this.props.radius,
              height: this.props.radius * 2,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: this.props.color,
              transform: 'rotate(' + this.state.leftTransformerDegree + ')',
            }}
          />
        </div>
        <div
          className="right-wrap"
          style={{
            width: this.props.radius,
            height: this.props.radius * 2,
            left: this.props.radius,
          }}
        >
          <div
            className="loader2"
            id="id2"
            style={{
              left: -this.props.radius,
              width: this.props.radius,
              height: this.props.radius * 2,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: this.props.color,
              transform: 'rotate(' + this.state.rightTransformerDegree + ')',
            }}
          />
        </div>
        <div
          className="inner-circle"
          style={{
            left: this.props.borderWidth,
            top: this.props.borderWidth,
            width: (this.props.radius - this.props.borderWidth) * 2,
            height: (this.props.radius - this.props.borderWidth) * 2,
            borderRadius: this.props.radius - this.props.borderWidth,
            backgroundColor: this.props.innerColor,
            background:this.props.innerColor,
            border:this.props.border,
            boxSizing:this.props.boxSizing
          }}
        >
            <div className="circleContent">
          {this.props.children ? this.props.children : 
             <span className={'text ' + this.props.textStyle}>{<FavoriteBorderIcon />}</span>}
              <span className="count" style={{color:"white"}}>456</span>
              <span className="likes" style={{color:"white"}}>Likes everyday</span>
          </div>
        </div>
      </div>
    );
  }
}


PercentageCircle.defaultProps = {
  color: '#DD4CAC',
  radius: 100,
  percent: 65,
  borderWidth: 1,
  bgcolor: 'grey',
  innerColor: 'linear-gradient(180deg, #050B14 28%, #050B14 69%, #0A0B1A 100%)',
  disabled: false,
  textStyle: '',
//   border:'1px solid #FFFFFF',
//   boxSizing:'border-box'
};

export default PercentageCircle;