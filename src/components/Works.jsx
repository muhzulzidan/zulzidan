import React, { Component } from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import Arrow from "../svg/arrow.svg";
// import "../images/works/islamtshirt.png"
// import MediaQuery from "react-responsive"

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: true,
    };
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
    // const isTable = useMediaQuery({ query: "(min-width: 767px)" });
    const settingsPhone = {
      // fade: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const settingTablet = {
      autoplay: true,
      pauseOnHover: true,
      // fade: true,
      autoplaySpeed: 500,
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    const { className, device } = this.props;
    let settings;
    if (device) {
      settings = settingsPhone;
    } else {
      settings = settingTablet;
    }
    // console.log(device);
    // get props from parent
    return (
      <div className={className}>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1}>
            <a
              href="https://islamtshirt.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/works/islamtshirt.png"
                alt="islamtshirt"
              />
              <h3 className="hide">islamtshirt.com</h3>
            </a>
          </div>

          <div key={3}>
            <a
              href="https://bonekurir.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/works/bonekurir.png"
                alt="bonekurir"
              />
              <h3 className="hide">bonekurir Landing Page</h3>
            </a>
          </div>
          <div key={4}>
            <a
              href="https://institutindonesia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/works/institutindonesia.png"
                alt="institut indonesia"
              />
              <h3 className="hide">institutindonesia</h3>
            </a>
          </div>
          <div key={2}>
            <a
              href="https://gatsby-directus-starter.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/works/directus.png"
                alt="directus starter"
              />
              <h3 className="hide">directus Starter</h3>
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
