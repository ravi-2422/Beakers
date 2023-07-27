import React from 'react'
import Slider from 'react-slick';
export default function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <div class="owl-carousel-item position-relative">
            <img class="img-fluid" src="img/carousel-1.jpg" alt="" />
            <div class="owl-carousel-inner">
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-lg-8">
                    <p class="text-primary text-uppercase fw-bold mb-2">// The Best Bakery</p>
                    <h1 class="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                    <p class="text-light fs-5 mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
                    <a href="/" class="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="owl-carousel-item position-relative">
            <img class="img-fluid" src="img/carousel-2.jpg" alt="" />
            <div class="owl-carousel-inner">
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-lg-8">
                    <p class="text-primary text-uppercase fw-bold mb-2">// The Best Bakery</p>
                    <h1 class="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                    <p class="text-light fs-5 mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
                    <a href="/" class="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Slider>
      );
    </>
  )
}
