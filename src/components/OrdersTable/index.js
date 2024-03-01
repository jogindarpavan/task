import OrdersContent from '../OrdersContent'
import './index.css'

const optionsList = [
  'Pending',
  'Accepted',
  'AWB Created',
  'Ready to Ship',
  'Shipped',
  'Completed',
  'Cancelled',
]

const OrdersTable = () => (
  <div className="orders-container">
    <div className="order-settings-container">
      <div className="order">
        <button type="button" className="order-btn">
          Orders <span className="close-tag">x</span>
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708354117/settings-gear-icon_qbvqil.png"
        alt="settings-icon"
        className="setting-icon-img"
      />
    </div>
    <div className="options-container">
      {optionsList.map(each => (
        <button
          type="button"
          className={`tabs ${each === 'Pending' ? 'pending-option' : null}`}
        >
          {each}
        </button>
      ))}
    </div>
    <OrdersContent />
  </div>
)

export default OrdersTable
