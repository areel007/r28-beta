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
      <div className="relative w-full h-full">
        <div className="w-[90%] xl:w-[900px] mx-auto flex items-center h-[calc(100%_-_99.479px)] md:h-[calc(100%_-_139.479px)] relative">
          <h1
            className="mt-[-100px] md:mt-[-200px] text-white text-[24px] md:text-[40px] lg:text-[60px] leading-[1] font-[700]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {heroContent.text}
          </h1>
        </div>
      </div>
    </div>
  );
}

OtherPageHero.propTypes = {
  heroContent: PropTypes.object,
};

export default OtherPageHero;
