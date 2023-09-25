import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Hero3 from "./assets/images/hero-3.jpg";
import EngineeringConstruction from "./assets/images/construction-biz.jpg";
import RealEstate from "./assets/images/real-estate-biz.jpg";
import TelecommunicationTechnology from "./assets/images/telecoms-biz.jpg";
import Aviation from "./assets/images/aviation-biz.jpg";
import Mining from "./assets/images/mining-biz.jpg";
import Footer from "./layouts/Footer";
import WhoWeAre from "./pages/WhoWeAre";
import OurCulture from "./pages/OurCulture";
import OurApproach from "./pages/OurApproach";
import Leadership from "./pages/Leadership";
import SirKesington from "./pages/Leadership/SirKesington";
import Adebisi from "./pages/Leadership/Adebisi";
import Afolabi from "./pages/Leadership/Afolabi";
import Eyo from "./pages/Leadership/Eyo"
import Engineering from './pages/OurInvestments/EngineeringAndConstruction'
import RealEstates from './pages/OurInvestments/RealEstate'

function App() {
  const [isMenuOut, setIsMenuOut] = useState(false);
  const [step, setStep] = useState(1);
  const [mobileSubNav, setMobileSubNav] = useState(null);
  const sliders = [
    {
      img: "https://res.cloudinary.com/chitchatimages/image/upload/v1645355988/r28/r28_c6sdgz.jpg",
      text: "Investing in Tommorow's Possibilities, Today!",
      opacity: true,
    },
    {
      img: Hero3,
      text: "Investing in Tommorow's Possibilities, Today!",
      opacity: false,
    },
  ];
  const investments = [
    {
      img: EngineeringConstruction,
      sector: "Engineering & Construction",
      comment: "Time-Tested Engineering & Construction Solutions",
      to: "engineering-and-construction",
    },
    {
      img: RealEstate,
      sector: "Real Estate",
      comment: "Shaping Tomorrow's Communities",
      to: "real-estate",
    },
    {
      img: TelecommunicationTechnology,
      sector: "Telecommunications & Technology",
      comment: "Seamless Energy & Technological Support",
      to: "telecommunication-and-technology",
    },
    {
      img: EngineeringConstruction,
      sector: "Manufacturing",
      comment: "Setting Global Standards in Local Manufacturing Excellence",
      to: "manufacturing",
    },
    {
      img: Aviation,
      sector: "Aviation",
      comment: "Creating A Better Travel Experience",
      to: "aviation",
    },
    {
      img: Mining,
      sector: "Mining",
      comment: "Extracting Sustainable Values",
      to: "mining",
    },
    {
      img: EngineeringConstruction,
      sector: "Healthcare",
      comment: "Shaping Tomorrow’s Communities",
      to: "healthcare",
    },
    {
      img: EngineeringConstruction,
      sector: "Trading",
      comment: "Superior Brands that Outperform",
      to: "trading",
    },
  ];

  const navigations = [
    {
      name: "About us",
      to: "/about-us",
      subNav: [
        {
          name: "Who we are",
          to: "/who-we-are",
        },
        {
          name: "Our Culture & Values",
          to: "/our-culture",
        },
        {
          name: "Our Approach",
          to: "/our-approach",
        },
        {
          name: "Leadership",
          to: "/leadership",
        },
      ],
    },
    {
      name: "Our investments",
      to: "/our-investments",
      subNav: [
        {
          name: "Engineering & Construction",
          to: "our-investments/engineering-and-construction",
        },
        {
          name: "Real estate",
          to: "our-investments/real-estate",
        },
        {
          name: "Telecommunications & Technology",
          to: "telecommunications-and-technology",
        },
        {
          name: "Manufacturing",
          to: "manufacturing",
        },
        {
          name: "Aviation",
          to: "aviation",
        },
        {
          name: "Mining",
          to: "mining",
        },
        {
          name: "Healthcare",
          to: "healthcare",
        },
        {
          name: "Trading",
          to: "trading",
        },
      ],
    },
    {
      name: "Strategic alliances",
      to: "/strategic-alliances",
    },
    {
      name: "Careers",
      to: "/careers",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  const handleOpenMobileMenu = () => {
    setIsMenuOut(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMenuOut(false);
    setStep(1);
  };

  const handleChooseStep = (e) => {
    setStep(2);
    setMobileSubNav(e);
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <>
      <Router>
        <Header
          navigations={navigations}
          handleOpenMobileMenu={handleOpenMobileMenu}
          handleCloseMobileMenu={handleCloseMobileMenu}
          isMobileMenuOut={isMenuOut}
          step={step}
          handleChooseStep={handleChooseStep}
          mobileSubNav={mobileSubNav}
          handleBack={handleBack}
        />
        <Routes>
          <Route
            path="/"
            element={<Home sliders={sliders} investments={investments} />}
          />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-culture" element={<OurCulture />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/leadership" element={<Leadership />}>
            <Route
              path="/leadership/sir-kesington"
              element={<SirKesington />}
            />
            <Route
              path="/leadership/adebisi"
              element={<Adebisi />}
            />
            <Route
              path="/leadership/afolabi"
              element={<Afolabi />}
            />
            <Route
              path="/leadership/eyo"
              element={<Eyo />}
            />
          </Route>
          <Route path="/our-investments/engineering-and-construction" element={<Engineering />} />
          <Route path="/our-investments/real-estate" element={<RealEstates />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
