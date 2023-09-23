import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function OurInvestments({ investments }) {
  return (
    <div className="py-[40px] md:py-[60px] lg:py-[100px] bg-white">
      <div className="w-[90%] lg:w-[800px] mx-auto mb-[50px] md:mb-[100px]">
        <h3 className="text-[14px] md:text-[16px] uppercase text-primary-color text-center font-[500] tracking-[4px] mb-[20px] md:mb-[30px]">
          Our investments
        </h3>
        <p className="text-primary-color text-center mb-[10px] text-[14px] md:text-[16px]">
          With a steadfast commitment to innovation and sustainable growth, we
          continually seek opportunities that align with our core values and
          drive long-term value creation. Discover how our strategic investments
          are shaping industries, driving progress, and contributing to a
          prosperous future.
        </p>
      </div>

      <div className="w-[90%] lg:w-[80%] xl:w-[1100px] mx-auto relative z-[0]">
        <div className="grid mb:grid-cols-2 slg:grid-cols-3  xl:grid-cols-4 gap-[5px]">
          {investments.map((investment, index) => {
            return (
              <Link
                to={investment.to}
                className="w-full h-[350px] 2xl:h-[400px] relative group cursor-pointer"
                key={index}
              >
                <div className="absolute bg-black top-0 left-0 w-full h-full opacity-[.5] group-hover:opacity-[.7] cursor-pointer z-[10]"></div>
                <img
                  src={investment.img}
                  alt="R28"
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
                <div className="relative top-0 left-0 w-full h-full z-[11] p-[30px] flex flex-col justify-between">
                  <span className="text-white text-[16px] md:text-[18px] leading-[1.2]">
                    {investment.sector.split("&")[0]} <br />
                    {investment.sector.includes("&") ? "&" : null}{" "}
                    {investment.sector.split("&")[1]}
                  </span>

                  <h3
                    className="text-white text-[20px] md:text-[24px] leading-[1.2] font-[600]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {investment.comment}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

OurInvestments.propTypes = {
  investments: PropTypes.array.isRequired,
};
