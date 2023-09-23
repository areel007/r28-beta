import Logo from "../../components/Logo";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="py-[40px] md:py-[60px] lg:py-[100px] bg-dark-grey">
        <div className="w-[90%] 2xl:w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-[40px] md:gap-[10px]">
            <div>
              <Logo />
            </div>

            <div>
              <p className="uppercase text-[12px] text-white mb-[10px]">About us</p>
              <ul className="flex flex-col gap-[10px]">
                <li className="text-white text-[12px] mdtext-[14px]">Who we are</li>
                <li className="text-white text-[12px] mdtext-[14px]">Our Culture & Values</li>
                <li className="text-white text-[12px] mdtext-[14px]">Our Approach</li>
                <li className="text-white text-[12px] mdtext-[14px]">Our Leadership</li>
                <li className="text-white text-[12px] mdtext-[14px]">Careers</li>
              </ul>
            </div>

            <div>
              <p className="uppercase text-[12px] text-white mb-[10px]">Our Investments</p>
              <ul className="flex flex-col gap-[10px]">
                <li className="text-white text-[12px] mdtext-[14px]">Subsidiaries</li>
                <li className="text-white text-[12px] mdtext-[14px]">Trading</li>
              </ul>
            </div>

            <div>
              <p className="uppercase text-[12px] text-white mb-[10px]">Startegic Alliances</p>
              <ul className="flex flex-col gap-[10px]">
                <li className="text-white text-[12px] mdtext-[14px]">Strategic Alliances</li>
              </ul>
            </div>

            <div>
              <p className="uppercase text-[12px] text-white mb-[10px]">Contact</p>
              <p className="text-white text-[12px] mdtext-[14px] mb-[10px]">54A Adeola Odeku Street <br />Victoria Island <br />Lagos, Nigeria</p>
              <p className="text-white text-[12px] mdtext-[14px] mb-[10px]">+234 906 245 7050 <br />+234 906 245 7051</p>
              <p className="text-white text-[12px] mdtext-[14px]">info@r28.ng</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[10px] bg-[#1b1a1a]"></div>
    </div>
  );
}
