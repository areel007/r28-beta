import PropTypes from "prop-types";

function Hamburger({ handleOpenMobileMenu }) {
  return (
    <svg
    onClick={handleOpenMobileMenu}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-white block lg:hidden"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

Hamburger.propTypes = {
  handleOpenMobileMenu: PropTypes.func
};

export default Hamburger;
