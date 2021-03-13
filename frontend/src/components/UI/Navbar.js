import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenuOutline } from 'react-icons/io5'
import iconMK from '../../assets/images/logos/MK Gold.svg'
import './Navbar.scss'

// Page navigation on topside of app
const Navbar = () => {
  const [toggle, setToggle] = useState('close')

  const handleMenuToggle = () => {
    setToggle('close')
  }

  return (
    <nav className='nav'>
      <div className='nav__i-wrapper'>
        <img className='nav__img' src={iconMK} alt='MK' />
        {/* Hamburger menu for mobile devices */}
        <IoMenuOutline
          className={`nav_icon nav__icon--${toggle}`}
          onClick={() => setToggle(toggle === 'open' ? 'close' : 'open')}
        />
      </div>
      <ul className={`nav__list nav__list--${toggle}`}>
        <Link to='/'>
          <li className='nav__item' onClick={handleMenuToggle}>
            Start
          </li>
        </Link>
        <Link to='/about'>
          <li className='nav__item' onClick={handleMenuToggle}>
            About Me
          </li>
        </Link>
        <Link to='/contact'>
          <li className='nav__item' onClick={handleMenuToggle}>
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
