import OtherPageHero from "../../../layouts/OtherPageHero";
import HeroImg from "../../../assets/images/construction-hero.jpg";
// import Businesses from "../../../layouts/Businesses";
import { useEffect } from "react";

export default function EngineeringAndConstruction () {
  const heroContent = {
    text: "Engineering & Construction",
    img: HeroImg,
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              Time-tested construction solutions
            </p>
            <div>
              <p className="text-[14px] md:text-[16px] leading-[1.6] mb-[10px]">
                R28 operates in the construction sector through her subsidiary,
                Arbico Plc. Arbico is a full service, building and civil
                engineering contracting company. <br />
                <br />
                Established in 1958, it has been quoted on the Nigerian Stock
                Exchange since 1978. Arbico has become one of the foremost
                building construction companies in Nigeria. <br />
                <br />
                The Company has developed substantial experience in building and
                civil engineering for government institutions, multinational
                companies, multilateral agencies, industrial groups, as well as
                high-net worth individuals. <br />
                <br />
                Arbico has been involved in pre- construction, general
                contracting, design-build, construction management, project
                management and construction services across a wide-range of
                projects in the following sectors:
              </p>

              <ul className="columns-1 sm:columns-2 list-disc ml-[20px] mb-[20px]">
                <li>Civil Engineering</li>
                <li>Infrastructure</li>
                <li>Aviation</li>
                <li>Healthcare</li>
                <li>Hospitality</li>
                <li>Manufacturing and Industrial</li>
                <li>Residential</li>
                <li>Water and Wastewater</li>
                <li>Education</li>
                <li>Corporate and commercial Offices</li>

              </ul>

              <p className="text-[14px] md:text-[16px] leading-[1.6]">
              Arbico's construction management team has vast experience ranging from private residences, high-rise buildings and factories to plants and infrastructure projects. The company has a proven track record of delivering construction projects on schedule and within budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
