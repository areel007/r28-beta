import OtherPageHero from "../../layouts/OtherPageHero";
import HeroImg from "../../assets/images/hero-3.jpg";
import LeaderCard from "../../components/LeaderCard";
import Kesington from "../../assets/images/chief.jpg";
import Adebisi from "../../assets/images/adebisi.jpg";
import Afolabi from "../../assets/images/afolabi.jpg";
import Eyo from "../../assets/images/eyo.jpg";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Leadership() {
  const location = useLocation();

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
      {location.pathname === "/leadership" ? (
        <div className="w-full py-[40px] md:py-[100px] bg-white">
          <div className="w-[90%] lg:w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
              {leaders.map((leader, index) => {
                return <LeaderCard leaderDetail={leader} key={index} />;
              })}
            </div>
          </div>
        </div>
      ) : null}
      <Outlet />
    </>
  );
}
