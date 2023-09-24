import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function LearnMore() {
  const mainTextRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const el = mainTextRef.current;
    const elSubText = subTextRef.current;
    gsap.fromTo(
      el,
      {
        y: -200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top bottom", // When the top of the element hits the center of the viewport
          end: "top bottom", // When the bottom of the element hits the center of the viewport
          scrub: 1, // Smooth animation while scrolling
        },
      }
    );

    gsap.fromTo(
      elSubText,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: elSubText,
          start: "top bottom", // When the top of the element hits the center of the viewport
          end: "top bottom", // When the bottom of the element hits the center of the viewport
          scrub: 1, // Smooth animation while scrolling
        },
      }
    );
  }, []);
  return (
    <div className="py-[40px] md:py-[60px] lg:py-[100px] bg-primary-color">
      <div className="w-[90%] lg:w-[800px] mx-auto">
        <h1
          className="text-white text-[20px] md:text-[28px] lg:text-[40px] leading-[1] font-[600] text-center mb-[20px] md:mb-[30px]"
          ref={mainTextRef}
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          A consolidated and Diversified Investment Holding Company
        </h1>
        <p
          className="text-white text-center mb-[10px] text-[14px] md:text-[16px]"
          ref={subTextRef}
        >
          R28 LIMITED, established in 2007, is a growing, consolidated and
          diversified private investment holding company with strategic business
          interest in various sectors of the Nigerian economy.
        </p>
        <div className="mx-auto w-[min-content] whitespace-nowrap">
          <Link
            to="/who-we-are"
            className="font-[600] text-white uppercase text-[12px]"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
