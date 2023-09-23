import OtherPageHero from "../../layouts/OtherPageHero";
import HeroImg from "../../assets/images/hero-3.jpg";

export default function WhoWeAre() {
  const heroContent = {
    text: "Who we are",
    img: HeroImg,
  };
  return (
    <>
      <OtherPageHero heroContent={heroContent} />
      <div className="w-full py-[40px] md:py-[100px] bg-white">
        <div className="w-[90%] lg:w-[900px] mx-auto">
          <p
            className="text-primary-color text-[24px] md:text-[32px] leading-[1.2] w-[100%] lg:w-[800px]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Established in 2007, R28 Limited is a consolidated and diversified
            private investment holding company with strategic business interest
            in various sectors of the Nigerian economy.
          </p>

          <div className="w-full lg:w-[800px] mt-[30px] md:mt-[50px]">
            <p className="text-[14px] md:text-[16px] leading-[1.6]">
              The company is continuously identifying and developing profitable
              investment opportunities to transform communities through job
              creation and capacity development. We invest in businesses that
              can deliver strong earnings and capital growth over the long term.
              Our investments are made directly or through subsidiaries and
              related companies that cut across a broad range of industries such
              as construction, real estate, oil & gas, aviation,
              telecommunication, and manufacturing. <br />
              <br />
              The leadership team is made up of professionals and astute
              entrepreneurs with several years of investment and management
              experience in multiple industries. <br />
              <br />
              Our investment philosophy is anchored on the long-term
              fundamentals, preferring to grow organically as well as through
              acquisitions in areas where we are able to leverage our
              significant experience and capabilities to create value. The
              Company predominantly uses its equity capital for investment which
              promotes favourable financing flexibility and swift decisions at
              the early stages of investment. <br />
              <br />
              R28 focuses on the Nigerian market and welcomes international
              opportunities with reputable partners. Furthermore, the company
              maintains strategic alliances with several international
              brands/operators and seeks to add value to its investment
              portfolio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
