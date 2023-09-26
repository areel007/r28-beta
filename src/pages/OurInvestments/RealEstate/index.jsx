import OtherPageHero from "../../../layouts/OtherPageHero";
import HeroImg from "../../../assets/images/real-estate-biz.jpg";
import { useEffect } from "react";

export default function RealEstate() {
  const heroContent = {
    text: "Real Estate",
    img: HeroImg,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OtherPageHero heroContent={heroContent} />
      <div className="w-full py-[40px] md:py-[100px] bg-white">
        <div className="w-[90%] lg:w-[900px] mx-auto">
          <div className="grid grid-cols-[1] md:grid-cols-[300px_1fr] gap-[20px] lg:gap-[40px]">
            <p
              className="text-primary-color text-[24px] md:text-[38px] leading-[1]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Shaping tomorrow's communities
            </p>
            <div>
              <p className="text-[14px] md:text-[16px] leading-[1.6] mb-[10px]">
                R28 Limited operates in the real estate sector through First
                Investment Development Company (FIDC). <br />
                <br />
                FIDC is one of the progressive and most valuable real estate
                development and investment companies in Nigeria. With proven
                competencies in properties, shopping malls & retail, airports
                and hospitality & leisure, FIDC is uniquely positioned to shape
                new lifestyles and transform communities with a focus on design
                excellence, build quality and timely delivery. <br />
                <br />
                The Company is currently involved in implementing real estate
                programs for public and private sector clients. <br />
                <br />
                Our extensive experience covers a wide range of projects
                including corporate headquarters, office buildings, residential
                and student housing, healthcare facilities, industrial
                infrastructure, aviation facilities and mixed-use development.{" "}
                <br />
                <br />
                By establishing best-in-class local and foreign professional
                management teams with relevant expertise, and through leveraging
                its own equity capital, the Company has built extensive track
                record in identifying, recommending, and executing the most
                appropriate financing, development, and management solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
