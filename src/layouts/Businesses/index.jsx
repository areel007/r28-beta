import { Link } from "react-router-dom";

export default function Businesses() {
  return (
    <div className="py-[30px] md:py-[60px] lg:py-[100px] bg-primary-color">
      <div className="w-[90%] lg:w-[900px] mx-auto">
        <p
          className="text-white text-[18px] md:text-[26px] font-[600] mb-[20px]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Businesses
        </p>

        <div className="grid grid-cols-[auto_auto_auto_auto_auto_auto] gap-[20px]">
            <Link to='/our-investments/engineering-and-construction'>Engineering and Construction</Link>
            <Link to='/our-investments/real-estate'>Real Estate</Link>
            <Link to='/our-investments/aviation'>Aviation</Link>
        </div>
      </div>
    </div>
  );
}
