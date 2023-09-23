import Hero from "../../layouts/Hero";
import PropTypes from 'prop-types'
import LearnMore from "../../layouts/LearnMore";
import OurInvestments from "../../layouts/OurInvestments";

export default function Home({sliders, investments}) {
  return (
    <>
      <Hero sliders={sliders} />
      <LearnMore />
      <OurInvestments investments={investments} />
    </>
  );
}

Home.propTypes = {
  sliders: PropTypes.array.isRequired,
  investments: PropTypes.array.isRequired
}
