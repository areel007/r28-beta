import OtherPageHero from "../../layouts/OtherPageHero";
import HeroImg from "../../assets/images/hero-3.jpg";

export default function StrategicAlliances() {
  const heroContent = {
    text: "Strategic Alliances",
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
              Creating Growth Opportunities
            </p>
            <div>
              <p className="text-[14px] md:text-[16px] leading-[1.6] mb-[10px]">
                As local industry experts, we have deep, intimate knowledge of
                the local business environment and the challenges our customers
                face. However, in a fast-changing economy, few companies have
                all the capabilities they need to stay competitive. <br />
                <br />
                In line with our global best practice perspective and partnering
                mindset, R28 through its subsidiaries and related companies
                maintains a network of several strategic business partnerships
                and alliances with reputable global brands in each industry that
                we operate in. <br />
                <br />
                The alliances are long term relationships focused on proactively
                addressing the identified business challenges in the local
                industry with a fit-for-purpose global solution. <br />
                <br />
                We astutely seek to leverage the power of our partners'
                innovative technology platforms, business processes and products
                & services to enhance the outcomes of the products and services
                we offer our customers. <br />
                <br />
                With this diverse expertise and the wealth of experience brought
                on board by the alliances, R28 is one step closer to fulfilling
                its strategic business objectives and ultimately accelerate
                business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
