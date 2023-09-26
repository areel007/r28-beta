import OtherPageHero from "../../layouts/OtherPageHero";
import HeroImg from "../../assets/images/hero-3.jpg";
// import LeaderCard from "../../components/LeaderCard";
import Kesington from "../../assets/images/chief.jpg";
import Adebisi from "../../assets/images/adebisi.jpg";
import Afolabi from "../../assets/images/afolabi.jpg";
import Eyo from "../../assets/images/eyo.jpg";
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function Leadership() {
  // const location = useLocation();

  const heroContent = {
    text: "Leadership",
    img: HeroImg,
  };

  const leaders = [
    {
      img: Kesington,
      name: "Sir Kesington Adebukunola Adebutu",
      honor: "CON, KJW, FISM",
      position: "Chairman",
      to: "/leadership/sir-kesington",
    },
    {
      img: Adebisi,
      name: "Adebisi Adebutu",
      honor: "",
      position: "Group President",
      to: "/leadership/adebisi",
    },
    {
      img: Afolabi,
      name: "Afolabi Ayeola",
      honor: "",
      position: "Group Executive",
      to: "/leadership/afolabi",
    },
    {
      img: Eyo,
      name: "Eyo Asuquo",
      honor: "",
      position: "Group Executive",
      to: "/leadership/eyo",
    },
  ];

  return (
    <>
      <OtherPageHero heroContent={heroContent} />
      <div className="w-full py-[40px] md:py-[100px] bg-white">
        <div className="w-[90%] lg:w-[750px] mx-auto">
          <h1 className="font-[600] text-[20px] md:text-[30px] text-center text-primary-color mb-[10px] md:mb-[20px]">
            Nurturing a Vision
          </h1>
          <p className="text-center text-[14px] md:text-[16px] leading-[1.6]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit animi inventore ab perferendis quibusdam! Distinctio
            ipsum deleniti, delectus sunt odit eos ratione corrupti impedit eius
            ab consectetur labore dolores officia quas beatae ipsa similique?
            Expedita, sint cumque? Corrupti odit amet vero, soluta vel eum. Qui
            consectetur tempora debitis enim at.
          </p>
        </div>
      </div>
      <div className="w-full h-[200px] bg-dark-grey py-[40px] md:py-[60px] lg:py-[100px]">
        <div className="w-[90%] 2xl:w-[1500px] mx-auto h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full"></div>
        </div>
      </div>
      <div className="py-[40px] md:py-[60px] lg:py-[100px] bg-white">
        <div className="w-[90%] xl:w-[1030px] mx-auto">
          <div className="w-full md:w-[700px] mx-auto mb-[20px]">
            <h2 className="text-center text-[18px] md:text-[26px] font-[600] text-primary-color mb-[10px]">
              Executive Leadership
            </h2>
            <p className="text-center text-[14px] md:text-[16px] leading-[1.6]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              necessitatibus quidem praesentium velit facere iste sequi aliquid
              atque non, dolorum nulla voluptas! Et enim velit modi est maxime
              impedit quibusdam.
            </p>
          </div>

          <div className="p-[20px] sxl:p-[40px]">
            <div className="grid grid-cols-[300px] smd:grid-cols-[300px_300px] sxl:grid-cols-[290px_290px_290px] ssxl:grid-cols-[300px_300px_300px] justify-center gap-[5px] sxl:gap-[20px]">
              {leaders.map((leader, index) => {
                return (
                  <Link
                    to={leader.to}
                    key={index}
                    className="relative overflow-hidden group"
                  >
                    <div className="w-full h-[334px] overflow-hidden">
                      <img
                        src={leader.img}
                        alt="R28"
                        className="w-full h-[334px] object-cover transition group-hover:scale-[1.1]"
                      />
                    </div>
                    <div className="mt-[10px]">
                      <p className="font-[600] text-[14px] md:text-[16px] leading-[1] text-center">
                        {leader.name}{" "}
                        {leader.honor ? (
                          <span className="italic font-[400] text-[14px]">
                            - {leader.honor}
                          </span>
                        ) : null}
                      </p>
                      <p className="text-center text-[13px]">
                        {leader.position}
                      </p>
                    </div>
                  </Link>
                );
              })}
              <div className="w-full h-[334px] bg-dark-grey"></div>
              <div className="w-full h-[334px] bg-dark-grey"></div>
            </div>
          </div>
        </div>
      </div>
      {/* {location.pathname === "/leadership" ? (
        <div className="w-full py-[40px] md:py-[100px] bg-white">
          <div className="w-[90%] lg:w-[750px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
              {leaders.map((leader, index) => {
                return <LeaderCard leaderDetail={leader} key={index} />;
              })}
            </div>
          </div>
        </div>
      ) : null} */}
      {/* <Outlet /> */}
    </>
  );
}
