import React, { Component } from "react";
import Slider from "react-slick";

import Arrow from "../svg/arrow.svg"

export default class PreviousNextMethods extends Component {
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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    // get props from parent 
    const { className } = this.props;
    return (
      <div className={className}>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h3>1</h3>
          </div>
          <div key={2}>
            <h3>2</h3>
          </div>
          <div key={3}>
            <h3>3</h3>
          </div>
          <div key={4}>
            <h3>4</h3>
          </div>
          <div key={5}>
            <h3>5</h3>
          </div>
          <div key={6}>
            <h3>6</h3>
          </div>
        </Slider>
        <div className="arrowContrainer">
          <button className="button-prev" onClick={this.previous}>
            <Arrow />
          </button>
          <button className="button-next" onClick={this.next}>
            <Arrow />
          </button>
        </div>
      </div>
    );
  }
}