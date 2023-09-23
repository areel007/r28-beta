import EyoImg from "../../assets/images/eyo2.jpg";

export default function Eyo() {
  return (
    <div className="w-full py-[40px] md:py-[100px] bg-white">
      <div className="w-[90%] lg:w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-[20px] md:gap-[40px]">
          <img src={EyoImg} alt="R28" className="w-[150px] md:w-full" />
          <div>
            <p
              className="text-primary-color text-[16px] md:text-[20px] font-[600] mb-[20px]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Eyo Asuquo
            </p>

            <p className="text-[14px] md:text-[16px] leading-[1.6]">
              Eyo Asuquo possesses over 20 years of leadership and executive
              management experience in Business Consulting, Commercial Banking,
              Insurance, Infrastructure, Construction, and Real Estate. <br />
              <br />
              Eyo started his career with a globally recognized management
              consulting and audit firm. He has acquired significant experience
              in business management and led several strategy and change
              initiatives across several sectors, has deep mergers and
              acquisition experience and achieved capital raise for several
              infrastructure projects including an airport terminal,
              internationally branded hotel assets. <br />
              <br />
              He is an alumnus of University of Nigeria, Nsukka, and Cass
              Business School, London, and a member of the Chartered Institute
              of Bankers. <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
