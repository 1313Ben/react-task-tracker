import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header class='header'>
      <h1>{title}</h1>
      <button class='btn'>Add</button>
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
// const headingStyle = {
//   // color: 'green',
//   // backgroundColor: 'black',
// }
export default Header
