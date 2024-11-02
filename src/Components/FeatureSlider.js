import React from "react";
import Slider from "react-slick";
import phone from "../img/capobrain-phone.png";
import tablet from "../img/capobrain-tab.png";
import Desktop from "../img/capobrain-desktop.png";
import AlliedSchool from "../img/1.png";
import EducatorsSchool from "../img/2.png";
import Client2 from "../img/3.png";
import Client3 from "../img/4.png";
import Client4 from "../img/5.png";
import Client5 from "../img/9.png";
import Client6 from "../img/6.png";
import Client7 from "../img/7.png";
import Client8 from "../img/8.png";
import Client9 from "../img/10.png";

const FeatureSlider = () => {
  const slider1 = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    scroll:false,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider2 = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 9,
    slidesToScroll: 0.8,
    autoplay: true,
    scroll:false,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full pt-10 lg:pt-20 pb-8" id="faq">
      <div className="flex px-2 flex-wrap">
        <div className="cb-container min-h-fit">
          <div className="w-full lg:w-4/6 mb-6 lg:mb-12 min-h-fit">
            <div className="pb-markdown min-h-fit font-grotesk-medium font-verdana-fallback text-sm font-sami-bold tracking-wide leading-5 uppercase text-[#1b9ce6]">
              <p>Schools Choose CapoBrain</p>
            </div>
            <div className="pb-markdown min-h-fit pt-4 lg:py-5">
              <h3 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl">
              Delivering Excellence to Over 30+ Educational Institutions with Our Best School Management Software  </h3>
            </div>
            <div className="pb-markdown min-h-fit mv-type--body text-cool-grey-600 hidden lg:block">
              <p>
              Our best school management software is trusted by over 30 schools, enhancing their management efficiency. Join us in transforming educational experiences and driving success with our comprehensive solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full">
        <img
          src={Desktop}
          width="1519"
          height="557"
          loading="eager"
          alt="Meditation on iPhone"
          className="absolute w-auto left-1/2 top-0 transform -translate-x-1/2 h-full z-10 hidden lg:flex"
        />
        <img
          src={tablet}
          width="319"
          height="557"
          loading="eager"
          alt="Meditation on iPhone"
          className="absolute w-auto left-1/2 top-0 transform -translate-x-1/2 h-full z-10 hidden sm:flex lg:hidden"
        />
        <img
          src={phone}
          width="319"
          height="557"
          loading="eager"
          alt="Meditation on iPhone"
          className="absolute w-auto left-1/2 top-0 transform -translate-x-1/2 h-full z-10 flex sm:hidden"
        />
        <div className="verticel-carousel pt-10">
          <Slider {...slider1}>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={AlliedSchool}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>

            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={EducatorsSchool}
                alt="The Educators School"
                width="242"
                height="auto"
              />
            </div>

            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client2}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>

            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client3}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client4}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client5}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>

            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client6}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client7}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>

            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client8}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client3}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
             <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={EducatorsSchool}
                alt="The Educators School"
                width="242"
                height="auto"
              />
            </div>

            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client2}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
          </Slider>
        </div>
        <div className="verticel-carousel mt-4 pb-8">
          <Slider {...slider2}>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client9}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client3}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client3}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client4}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client5}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client6}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={AlliedSchool}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={EducatorsSchool}
                alt="The Educators School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client2}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>    
             <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client3}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client4}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client5}
                alt="Allied School"
                width="242"
                height="auto"
              />
            </div>      
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default FeatureSlider;