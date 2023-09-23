import PropTypes from "prop-types";

import Logo from "../components/Logo";
import Navigation from "../components/Navigations";
import Hamburger from "../components/Hamburger";
import MobileMenu from "../components/MobileMenu";
import Twitter from "../components/Twitter";
import LinkedIn from "../components/LinkedIn";


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
  return (
    <header className="w-full py-[30px] absolute top-0 left-0 z-[10]">
      <MobileMenu
        navigations={navigations}
        handleCloseMobileMenu={handleCloseMobileMenu}
        isMobileMenuOut={isMobileMenuOut}
        step={step}
        handleChooseStep={handleChooseStep}
        mobileSubNav={mobileSubNav}
        handleBack={handleBack}
      />
      <div className="w-[90%] 2xl:w-[1500px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-[100px]">
          <Logo />
          <Navigation navigations={navigations} />
        </div>
        {!isMobileMenuOut ? (
          <Hamburger handleOpenMobileMenu={handleOpenMobileMenu} />
        ) : null}
        <div className="hidden lg:flex gap-[10px] items-center">
          <Twitter />
          <LinkedIn />
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
  handleBack: PropTypes.func
};
