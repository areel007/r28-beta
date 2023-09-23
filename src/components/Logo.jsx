import { Link } from "react-router-dom"
import R28 from '../assets/images/R28_LOGO.png'

export default function Logo() {
  return (
    <Link to='/'>
      <img src={R28} alt="R28" className="w-[30px] md:w-[60px]" />
    </Link>
  )
}
