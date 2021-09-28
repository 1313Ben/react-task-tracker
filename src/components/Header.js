import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' ?
      <Button
        text={showAdd ? 'Close' : 'Add'}
        color={showAdd ? 'orange' : 'green'}
          onClick={onAdd} />
        : ''
      }
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker default',
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
