import OtherPageHero from "../../../layouts/OtherPageHero";
import HeroImg from "../../../assets/images/aviation-biz.jpg";
import { useEffect } from "react";

export default function Aviation() {
  const heroContent = {
    text: "Aviation",
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
              Creating a better travel experience.
            </p>
            <div>
              <p className="text-[14px] md:text-[16px] leading-[1.6] mb-[10px]">
                R28 Limited operates in the aviation sector via Asaba Airport
                Company (AAC). <br />
                <br />
                The company recently signed a thirty (30) years concession
                agreement with the Delta State Government to redevelop, operate
                and manage the Asaba International Airport (IATA: ABB, ICAO:
                DNAS). <br />
                <br />
                The Asaba International Airport is an airport serving the city
                of Asaba, its environs, and the Niger-Delta region. The airport
                currently handles domestic flight services connecting the
                metropolis to Nigeria's major metropolitan centers, with few
                international flights in the recent past. <br />
                <br />
                The objectives of the concession are to foster the remodeling
                and deployment of requisite airport infrastructure, elevate air
                travel experience and create a regional hub for air traffic
                movement connecting West and Central Africa. In this regard, our
                vision is to provide professional excellence in airport
                management and operations, help airlines operate safely,
                securely, and efficiently and provide a pleasurable and
                convenient travel experience to passengers. <br />
                <br />
                The sustainability of Asaba International Airport is critical
                for the local economy since it is in a position to support the
                expected trade and economic growth of the Niger-Delta region.
                The remodeling and expansion of the airport will address current
                capacity issues and the expected cargo and passenger traffic
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
