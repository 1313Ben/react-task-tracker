import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <h1 style={headingStyle}>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tacker default',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
const headingStyle = {
  // color: 'green',
  // backgroundColor: 'black',
}
export default Header
