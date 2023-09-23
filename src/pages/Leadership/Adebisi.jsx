import AdebisiImg from "../../assets/images/adebisi2.jpg";

export default function Adebisi() {
  return (
    <div className="w-full py-[40px] md:py-[100px] bg-white">
      <div className="w-[90%] lg:w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-[20px] md:gap-[40px]">
          <img src={AdebisiImg} alt="R28" className="w-[150px] md:w-full" />
          <div>
            <p
              className="text-primary-color text-[16px] md:text-[20px] font-[600] mb-[20px]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Adebisi Adebutu
            </p>

            <p className="text-[14px] md:text-[16px] leading-[1.6]">
              CEO Adebisi has over 25 years of inspiring entrepreneurial
              experience as founder and business owner in several organizations
              from telecommunication, gaming, hospitality, entertainment,
              construction, and property development. <br />
              <br />
              A consummate entrepreneur with a high degree of personal integrity
              and effective leadership and management style, offering expertise
              in core areas of business management operations. <br />
              <br />
              Adebisi possesses a contagious passion for excellence, a talent
              for resourceful business solutions, and a capacity for motivated
              leadership. He is an alumnus of the University of Swansea, United
              Kingdom and also alumnus of Insead Business School.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
