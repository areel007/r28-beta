import SirKesingtonImg from "../../assets/images/chief-2.jpg";

export default function SirKesington() {
  return (
    <div className="w-full py-[40px] md:py-[100px] bg-white">
      <div className="w-[90%] lg:w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-[20px] md:gap-[40px]">
          <img src={SirKesingtonImg} alt="R28" className="w-[150px] md:w-full" />
          <div>
            <p
              className="text-primary-color text-[16px] md:text-[20px] font-[600] mb-[20px]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Sir Kesington Adebukunola Adebutu{" "}
              <span
                className="italic text-black text-[11px]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                CON, KJW, FISM
              </span>
            </p>

            <p className="text-[14px] md:text-[16px] leading-[1.6]">
              Sir Kesington is the Founder/ Chairman of Premier Lotto popularly
              known as ‘Baba Ijebu’. Nigeria’s leading games and entertainment
              company. <br />
              <br />
              An astute entrepreneur, a business icon and a philanthropist of
              great repute. Armed with a rare conviction to transform society,
              he has become one of the most reliable social- economic forces of
              our time; helping to move Nigeria forward towards national
              integration, economic growth and development. Sir Kesington’s
              philanthropic gestures stand him out as a man of rare humanitarian
              pedigree. <br />
              <br />
              Through the Kesington Adebukunola Adebutu Foundation (KAAF) he
              continues to change the lives of many.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
