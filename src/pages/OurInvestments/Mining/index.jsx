import OtherPageHero from "../../../layouts/OtherPageHero";
import HeroImg from "../../../assets/images/mining-biz.jpg";

export default function index() {
  const heroContent = {
    text: "Mining",
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
              Extracting sustainable value
            </p>
            <div>
              <p className="text-[14px] md:text-[16px] leading-[1.6] mb-[10px]">
                R28 Limited operates in the mining sector through Prestige
                Quarry, with activities in Abuja, Lagos, Plateau and Bauchi.{" "}
                <br />
                <br />
                Prestige Quarry was established to explore and develop mining
                licenses for natural stone and other solid minerals. <br />
                <br />
                The Company currently owns and operates quarries in Abuja and
                Ibadan, providing a wide range of stone products including
                marble, granite, limestone, sandstone, and slate. <br />
                <br />
                Prestige Quarry also has the capability and experience to
                undertake similar and related mining services and is currently
                conducting exploratory activities for other solid minerals
                propositions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
