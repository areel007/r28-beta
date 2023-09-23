import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function LeaderCard({leaderDetail}) {
  return (
    <Link to={leaderDetail.to}>
      <div className="grid grid-cols-[auto_1fr] h-[150px] shadow">
        <img src={leaderDetail.img} alt="R28" />
        <div className="p-[10px] bg-[#E9E1CE]">
          <p className="font-[600] text-primary-color">{leaderDetail.name} <span className="font-[400] text-black text-[12px] italic">{leaderDetail.honor}</span></p>
          <p className="text-[14px]">{leaderDetail.position}</p>
        </div>
      </div>
    </Link>
  )
}

LeaderCard.propTypes = {
  leaderDetail: PropTypes.object
}
