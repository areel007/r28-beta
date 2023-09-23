import OtherPageHero from "../../layouts/OtherPageHero";
import HeroImg from "../../assets/images/hero-2.jpg";

export default function OurCulture() {
  const heroContent = {
    text: "Our Culture & Values",
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
              Culture built on enduring values
            </p>
            <div>
              <p className="text-[14px] md:text-[16px] leading-[1.6]">
                Everyone involved in the Company has an ongoing responsibility
                to share and live by our corporate values and ambitions. The
                Group’s thinking, interaction and decision-making process is
                grounded in these values, and we recognize that continuous
                adherence is essential to our growth. The three core values that
                frame all our actions and underpin our performance are:
              </p>

              <div className="mt-[20px]">
                <p className="text-primary-color font-[700] text-[14px]">
                  Integrity
                </p>
                <p className="text-[14px] md:text-[16px] leading-[1.6]">
                  A commitment to ensuring our business activities are done with
                  sound moral and the highest ethical standard.
                </p>
              </div>

              <div className="mt-[20px]">
                <p className="text-primary-color font-[700] text-[14px]">
                  Quality
                </p>
                <p className="text-[14px] md:text-[16px] leading-[1.6]">
                  We thoroughly understand that quality ensures customer
                  satisfaction, increased profitability, good neighborliness and
                  overall growth. Therefore, we have put quality at the core of
                  everything we do. We continually strive to gain a reputation
                  for high standards of quality in all the marketplace where we
                  operate. <br />
                  <br />
                  This pursuit of uncompromising quality is the underlying
                  fundamental that enables us to move swiftly and effectively to
                  create value to all stakeholders in all our investments.
                </p>
              </div>

              <div className="mt-[20px]">
                <p className="text-primary-color font-[700] text-[14px]">
                  Innovation
                </p>
                <p className="text-[14px] md:text-[16px] leading-[1.6]">
                  R28 offers a depth and range of skills and knowledge that
                  encourages creative thinking that stimulates innovation. This
                  often allows us to create viable investment solutions and
                  unlock latent business opportunities. We innovate to
                  continually build better solutions, execute faster and more
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
