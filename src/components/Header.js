import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button />
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
