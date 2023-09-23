import AfolabiImg from "../../assets/images/afolabi-2.jpg";

export default function Afolabi() {
  return (
    <div className="w-full py-[40px] md:py-[100px] bg-white">
      <div className="w-[90%] lg:w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-[20px] md:gap-[40px]">
          <img src={AfolabiImg} alt="R28" className="w-[150px] md:w-full" />
          <div>
            <p
              className="text-primary-color text-[16px] md:text-[20px] font-[600] mb-[20px]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Afolabi Ayeola
            </p>

            <p className="text-[14px] md:text-[16px] leading-[1.6]">
              Afolabi Aiyeola has over 25 years of working experience in the
              construction industry, managing various large-scale commercial,
              residential, and institutional construction projects in different
              countries including Nigeria, USA and Angola. <br />
              <br />
              He is an effective business leader, offering expertise in
              operation management, relationship Building and contract
              negotiation. He holds a Bachelor of Science Degree in Civil
              Engineering from the University of Lagos and a Master of Science
              Degree in Civil Engineering with an emphasis in Construction
              Engineering and Management from Virginia Tech, USA. <br />
              <br />
              He is a member of the Institute of Directors Nigeria, Project
              Management Institute and a certified Project Management
              Professional. He is also an alumnus of the Lagos Business School.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
