import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonial1 from '../Images/Testimonial1.png';
import Testimonial2 from '../Images/Testimonial2.png';
import Testimonial3 from '../Images/Testimonial3.png';
import Testimonial4 from '../Images/Testimonial4.png';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const testimonials = [
  { image: Testimonial1 },
  { image: Testimonial2 },
  { image: Testimonial3 },
  { image: Testimonial4 },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-[#f9a825] text-[50px]">
      <MdKeyboardArrowRight />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-[#f9a825] text-[50px]">
      <MdKeyboardArrowLeft />
    </div>
  );
}

export default function Testimonials() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 px-4 py-8">
      <h2 className="text-[28px] md:text-[35px] font-bold text-center mb-4">What People Are Saying</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index}>
            <div className="p-4">
              <img
                src={t.image}
                alt={`Testimonial ${index + 1}`}
                className="mx-auto rounded-lg mb-4 object-cover"
              />
              {/* If you add text */}
              {/* <p className="text-gray-300 italic text-sm md:text-base">"{t.text}"</p>
          <h4 className="mt-4 font-semibold text-[#f9a825] text-sm md:text-base">– {t.name}</h4> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
