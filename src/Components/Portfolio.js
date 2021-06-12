import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
              <div className="item-buttons">
                <a href={projects.live_url}><button>View Live <span>🔴</span></button></a>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Examples of Work</h1>
          <div  id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf">
            <Slider {...settings} className='portfolio-slider'>
              {projects}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
