import React from 'react'
import Slider from 'react-slick'

export default function ProjectSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div>
      <Slider {...settings}>
        <div><div class="testimonial-item bg-white rounded p-4">
          <div class="d-flex align-items-center mb-4">
            <img class="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-1.jpg" alt="" />
            <div class="ms-4">
              <h5 class="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
          <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
        </div>
        </div>
        <div>
          <div class="testimonial-item bg-white rounded p-4">
            <div class="d-flex align-items-center mb-4">
              <img class="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-2.jpg" alt="" />
              <div class="ms-4">
                <h5 class="mb-1">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
          </div>
        </div>
        <div>
          <div class="testimonial-item bg-white rounded p-4">
            <div class="d-flex align-items-center mb-4">
              <img class="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-3.jpg" alt="" />
              <div class="ms-4">
                <h5 class="mb-1">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
          </div>
        </div>
        <div><div class="testimonial-item bg-white rounded p-4">
          <div class="d-flex align-items-center mb-4">
            <img class="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-4.jpg" alt="" />
            <div class="ms-4">
              <h5 class="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
          <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
        </div>
        </div>
      </Slider>

    </div>
  )
}
