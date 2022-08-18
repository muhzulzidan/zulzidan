import React, { Component } from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import Arrow from "../svg/arrow.svg"
// import "../images/works/islamtshirt.png"

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
            <a href="https://islamtshirt.com/">
              <StaticImage src="../images/works/islamtshirt.png" />
            </a>
          </div>
          <div key={2}>
            <a href="https://gatsby-directus-starter.netlify.app">
              <StaticImage src="../images/works/directus.png" />
            </a>
          </div>
          <div key={3}>
            <a href="https://bonekurir.netlify.app/">
              <StaticImage src="../images/works/bonekurir.png" />
            </a>
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