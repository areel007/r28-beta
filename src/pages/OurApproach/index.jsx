import OtherPageHero from "../../layouts/OtherPageHero";
import HeroImg from "../../assets/images/hero-1.jpg";

export default function OurApproach() {
  const heroContent = {
    text: "Our Approach",
    img: HeroImg,
  };

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
              Investing on a value basis
            </p>
            <p className="text-[14px] md:text-[16px] leading-[1.6]">
              R28 investment activities is facilitated through an astute and
              often creative approach to opportunities, alongside swift
              assessment and investment decisions.
              <br />
              <br />
              R28 investment strategy is primarily focused on the Nigerian
              market, however the Company will also consider opportunities in
              Sub- Saharan Africa. <br />
              <br />
              The Company prefers positive cash flow business models with
              committed management but is also willing to acquire businesses
              through leveraged buyouts and distressed situations. The Company
              continues to seek new opportunities and can accommodate complex
              financial structures where required. <br />
              <br />
              With a clear emphasis on the value of skilled and motivated
              management, the Company adds value through supporting and advising
              its teams through all phases of a businesses’ development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
