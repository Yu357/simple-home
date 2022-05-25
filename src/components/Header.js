import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/header.css'
import { FaBars } from 'react-icons/fa'
import HamburgerMenu from './HamburgerMenu'

function Header() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const onTapBars = () => {
    setIsOpenMenu(true)
  }

  return (

    <div>
      <header>
        <div className='large-container'>
          <a href='/' className='logo'>Simple Home</a>

          <ul className='global-nav'>
            <li><NavLink to='/' activeclassname='active' exact='true'>Top</NavLink></li>
            <li><NavLink to='/gallery' activeclassname='active'>Gallery</NavLink></li>
            <li><NavLink to='/contact' activeclassname='active'>Contact</NavLink></li>
          </ul>

          <div className='bars-wrapper' onClick={onTapBars} tabIndex='0'>
            <FaBars className='bars'/>
          </div>

        </div>
      </header>

      <HamburgerMenu isOpenMenu={isOpenMenu} onTapTimes={() => setIsOpenMenu(false)}/>
      
    </div>
  )
}

export default Header