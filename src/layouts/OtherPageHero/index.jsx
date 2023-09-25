import PropTypes from "prop-types";

function OtherPageHero({ heroContent }) {
  return (
    <div className="h-screen w-screen relative">
      <div className="h-[99.479px] md:h-[139.479px]"></div>
      <img
        src={heroContent.img}
        alt="R28"
        className="absolute top-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 z-[8] bg-black w-full h-full opacity-[.4]"></div>

      <div className="other__hero__text">
        <div className="w-[60px] hidden lg:block"></div>
        <h1
          className="mt-[-100px] md:mt-[-200px] text-white text-[24px] md:text-[40px] lg:text-[60px] leading-[1] font-[700]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {heroContent.text}
        </h1>
      </div>
    </div>
  );
}

OtherPageHero.propTypes = {
  heroContent: PropTypes.object,
};

export default OtherPageHero;
