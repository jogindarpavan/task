import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMoonOutline} from 'react-icons/io5'
import {FaRegBell} from 'react-icons/fa'
import {MdOutlineGTranslate} from 'react-icons/md'

import './index.css'

const NavigationBar = () => (
  <nav className="navbar">
    <div className="menu-container">
      <GiHamburgerMenu />
    </div>
    <div className="nav-btn-container">
      <button type="button" className="nav-btn">
        <IoMoonOutline color="black" size={16} />
      </button>
      <button type="button" className="nav-btn">
        <FaRegBell size={16} />
      </button>
      <button type="button" className="nav-btn">
        <MdOutlineGTranslate size={16} />
      </button>
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708353635/man_f0gx4u.png"
        alt=""
        className="image"
      />
    </div>
  </nav>
)

export default NavigationBar
