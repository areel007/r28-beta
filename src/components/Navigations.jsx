import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navigation({ navigations }) {
  return (
    <nav className="hidden lg:flex items-center gap-[30px]">
      {navigations.map((_navigation, i) => {
        return _navigation.subNav ? (
          <div key={i} className="relative group py-[10px] menu">
            <span className="text-white uppercase text-[12px] cursor-pointer">{_navigation.name}</span>
            <div className="dropdown">
              <div className={`flex flex-col gap-[15px] bg-dark-grey shadow text-[14px] p-[20px] ${_navigation.name.toLowerCase()==='about us'?'min-w-[250px]':'min-w-[700px] grid grid-cols-[1fr_1fr_1fr] gap-[15px] p-[50px]'}`}>
              {_navigation.subNav.map((_subNav, idx) => (
                <Link to={_subNav.to} key={idx} className="text-white hover:font-[600]">{_subNav.name}</Link>
              ))}
              </div>
            </div>
          </div>
        ) : (
          <Link to={_navigation.to} key={i} className="text-white uppercase text-[12px]">{_navigation.name}</Link>
        );
      })}
    </nav>
  );
}

Navigation.propTypes = {
  navigations: PropTypes.array.isRequired,
};

export default Navigation;
