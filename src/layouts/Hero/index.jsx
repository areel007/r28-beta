import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Hero.module.css";
import PropTypes from "prop-types";

export default function Hero({ sliders }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: true,
  };

  return (
    <div className={`h-screen w-full ${style.hero__1}`}>
      <Slider {...settings}>
        {sliders.map((slider, index) => {
          return (
            <div className={style.carousel__slider} key={index}>
              {slider.opacity ? (
                <div className={style.inner__carousel__slider}></div>
              ) : (
                <div
                  className={style.inner__carousel__slider__no__opacity}
                ></div>
              )}
              <img
                src={slider.img}
                alt="R28"
                className="w-full h-full object-cover absolute"
              />
              <div className={style.carousel__text}>
                <div className="h-[99.479px] md:h-[139.479px]"></div>
                <div className="w-full h-[calc(100%_-_99.479px)] md:h-[calc(100%_-_139.479px)] flex items-center">
                  <h1
                    className="mt-[-100px] md:mt-[-200px] text-white text-[24px] md:text-[40px] lg:text-[60px] leading-[1] font-[700]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {slider.text.split(" ").slice(0, 3).join(" ")} <br />
                    {slider.text.split(" ").slice(3).join(" ")}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

Hero.propTypes = {
  sliders: PropTypes.array.isRequired,
};
