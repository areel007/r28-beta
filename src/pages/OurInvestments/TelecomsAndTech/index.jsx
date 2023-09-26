import OtherPageHero from "../../../layouts/OtherPageHero";
import HeroImg from "../../../assets/images/telecoms-biz.jpg";
import { useEffect } from "react";

export default function TelecomsAndTech() {
  const heroContent = {
    text: "Telecommunications & Technology",
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
              Seamlessly supporting the telecoms sector
            </p>
            <div>
              <p className="text-[14px] md:text-[16px] leading-[1.6] mb-[10px]">
                R28 Limited operates in the telecommunications sector through
                its subsidiary, Biswal Limited. <br />
                <br />
                The company provides a full range of technical services and
                material support to allow end-to-end telecoms infrastructure
                deployment, as well as post deployment maintenance and energy
                solutions management, both within and outside Nigeria. <br />
                <br />
                Biswal provides high quality, bespoke services to the
                telecommunications industry. We pride ourselves on the
                acquisition, development and deployment of all resources
                required to allow a telecommunications company to provide
                excellent service to its own customers. <br />
                <br />
                We provide support services to the telecommunications industry.
                With more than twenty years' experience, we deliver high
                quality, cost-effective support services and innovative products
                to leading telecommunications companies in Nigeria. <br />
                <br />
                We acquire, develop and deploy resources in order to deliver the
                best possible quality in service for the telecommunications
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
