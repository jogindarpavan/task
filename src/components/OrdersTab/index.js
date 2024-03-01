import {AiOutlineDashboard, AiOutlineTag} from 'react-icons/ai'
import {FaRegListAlt} from 'react-icons/fa'
import {MdOutlineLocalShipping} from 'react-icons/md'
import {IoShareSocialOutline} from 'react-icons/io5'

import './index.css'

const OrdersTab = () => (
  <div className="orders">
    <ul className="orders-list">
      <li className="order-list-item">
        <AiOutlineDashboard size={16} />
        <button type="button" className="order-btn">
          Dashboard
        </button>
      </li>
      <li className="order-list-item">
        <AiOutlineTag size={16} />
        <button type="button" className="order-btn">
          Inventory
        </button>
      </li>
      <li className="order-list-item list">
        <FaRegListAlt size={16} />
        <button type="button" className="order-btn">
          Orders
        </button>
      </li>
      <li className="order-list-item">
        <MdOutlineLocalShipping size={16} />
        <button type="button" className="order-btn">
          Shipping
        </button>
      </li>
      <li className="order-list-item">
        <IoShareSocialOutline size={16} />
        <button type="button" className="order-btn">
          Channel
        </button>
      </li>
    </ul>
  </div>
)

export default OrdersTab
