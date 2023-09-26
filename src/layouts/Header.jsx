import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import Logo from "../components/Logo";
import Navigation from "../components/Navigations";
import Hamburger from "../components/Hamburger";
import MobileMenu from "../components/MobileMenu";
import Twitter from "../components/Twitter";
// import LinkedIn from "../components/LinkedIn";

export default function Header({
  handleOpenMobileMenu,
  navigations,
  handleCloseMobileMenu,
  isMobileMenuOut,
  step,
  handleChooseStep,
  mobileSubNav,
  handleBack,
}) {
  const location = useLocation()
  console.log(location.pathname);
  return (
    <header className={`w-full py-[30px] absolute top-0 left-0 z-[10] ${location.pathname==='/contact'?'bg-primary-color':'bg-transparent'}`}>
      <MobileMenu
        navigations={navigations}
        handleCloseMobileMenu={handleCloseMobileMenu}
        isMobileMenuOut={isMobileMenuOut}
        step={step}
        handleChooseStep={handleChooseStep}
        mobileSubNav={mobileSubNav}
        handleBack={handleBack}
      />
      <div className="w-[90%] 2xl:w-[1500px] mx-auto grid grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] gap-[100px] items-center justify-items-end lg:justify-items-start">
        <Logo />
        <Navigation navigations={navigations} />
        {!isMobileMenuOut ? (
          <Hamburger handleOpenMobileMenu={handleOpenMobileMenu} />
        ) : null}
        <div className="hidden lg:flex gap-[10px] items-center">
          <Twitter color={'white'} />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  navigations: PropTypes.array.isRequired,
  handleOpenMobileMenu: PropTypes.func,
  handleCloseMobileMenu: PropTypes.func,
  isMobileMenuOut: PropTypes.bool,
  step: PropTypes.number,
  handleChooseStep: PropTypes.func,
  mobileSubNav: PropTypes.array,
  handleBack: PropTypes.func,
};
