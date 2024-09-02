import "./title.css"
import PropTypes from "prop-types"

function Title({title , color}) {
  return (
    <div className='section-title'>
        <h3 style={{ color: `${color}` }}>{title}</h3>
        <div className='horz-line' style = {{background: `${color}`}}></div>
        <p style={{ color: `${color}`}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
    </div>
  )
}

Title.propTypes ={
  title: PropTypes.string,
  color: PropTypes.string
}

export default Title
