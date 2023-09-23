import PropTypes from 'prop-types'

function Cancel({handleCloseMobileMenu}) {
  return (
    <svg onClick={handleCloseMobileMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

  )
}

Cancel.propTypes = {
  handleCloseMobileMenu: PropTypes.func
}

export default Cancel
