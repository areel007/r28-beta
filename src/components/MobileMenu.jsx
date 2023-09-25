import PropTypes from "prop-types";
import Cancel from "../components/Cancel";
import Back from "../components/Back";
import Twitter from "./Twitter";
import LinkedIn from "./LinkedIn";

function MobileMenu({
  navigations,
  handleCloseMobileMenu,
  isMobileMenuOut,
  step,
  handleChooseStep,
  mobileSubNav,
  handleBack,
}) {
  return (
    <nav
      className={`w-full h-screen fixed left-0 top-0 z-[100] transition ${
        isMobileMenuOut ? "translate-x-0" : "translate-x-[-100%]"
      }`}
    >
      <div className="absolute top-[35px] right-[15px] flex items-center gap-[10px]">
        {step > 1 ? <Back handleBack={handleBack} /> : null}
        <Cancel handleCloseMobileMenu={handleCloseMobileMenu} />
      </div>
      <div className="w-[90%] mx-auto mt-[80px] p-[20px] bg-white shadow">
        {step == 1 ? (
          <div className="flex flex-col gap-[20px] text-[12px] uppercase text-dark-gray">
            {navigations.map((nav, i) => {
              return nav.subNav ? (
                <span key={i} onClick={() => handleChooseStep(nav.subNav)}>
                  {nav.name}
                </span>
              ) : (
                <a href={nav.to} key={i}>
                  {nav.name}
                </a>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-[20px] text-[12px] uppercase text-dark-gray">
            {mobileSubNav.map((subNav, idx) => {
              return (
                <a href={subNav.to} key={idx}>
                  {subNav.name}
                </a>
              );
            })}
          </div>
        )}
        <div className="flex gap-[10px] items-center mt-[20px]">
          <Twitter color={'#3d3d3c'} />
        </div>
      </div>
    </nav>
  );
}

MobileMenu.propTypes = {
  navigations: PropTypes.array.isRequired,
  handleCloseMobileMenu: PropTypes.func,
  isMobileMenuOut: PropTypes.bool.isRequired,
  step: PropTypes.number,
  handleChooseStep: PropTypes.func,
  mobileSubNav: PropTypes.array,
  handleBack: PropTypes.func,
};

export default MobileMenu;
