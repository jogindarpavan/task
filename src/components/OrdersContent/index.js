import {BsArrowLeftSquare} from 'react-icons/bs'
import {AiOutlineSend, AiFillFilter} from 'react-icons/ai'
import {IoPrintOutline} from 'react-icons/io5'
import {IoIosArrowDown, IoIosSearch} from 'react-icons/io'
import {RiRefreshLine, RiExpandUpDownFill} from 'react-icons/ri'
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'
import {CgMathPlus} from 'react-icons/cg'

import './index.css'

const tableData = [
  {
    order_no: '#TKN20203754',
    order_date: '2022-05-04',
    city: 'Lucknow',
    customer_name: 'Abhishek Dixit',
    order_value: '0.00',
    status: 'Pending',
  },
  {
    order_no: '#TKN20203754',
    order_date: '2022-05-04',
    city: 'Lucknow',
    customer_name: 'Abhishek Dixit',
    order_value: '0.00',
    status: 'Pending',
  },
  {
    order_no: '#TKN20203754',
    order_date: '2022-05-04',
    city: 'Lucknow',
    customer_name: 'Abhishek Dixit',
    order_value: '0.00',
    status: 'Pending',
  },
]

const OrdersContent = () => (
  <div className="order-details-container">
    <div className="options-list-container">
      <button type="button" className="option-btn">
        <BsArrowLeftSquare className="icon" />
        <p className="option-name">Import Orders</p>
      </button>
      <button type="button" className="option-btn">
        <AiOutlineSend className="icon" />
        <p className="option-name">Accept</p>
      </button>
      <button type="button" className="option-btn">
        <IoPrintOutline className="icon" />
        <p className="option-name">Print</p>
        <IoIosArrowDown size={20} style={{marginLeft: '6px'}} />
      </button>
      <button type="button" className="refresh-btn option-btn">
        <RiRefreshLine size={20} style={{marginLeft: '4px'}} />
        <p className="refresh">Refresh</p>
      </button>
    </div>
    <div className="table-data-container">
      <div className="table-header">
        <div className="option option1">
          <input type="checkbox" />
        </div>
        <div className="option option2">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Channel
          </p>
          <RiExpandUpDownFill size={16} />
          <AiFillFilter size={16} />
        </div>
        <div className="option option3">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Order No
          </p>
          <RiExpandUpDownFill size={16} />
          <IoIosSearch size={16} />
        </div>
        <div className="option option4">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Order Date
          </p>
          <RiExpandUpDownFill size={16} />
          <IoIosSearch size={16} />
        </div>
        <div className="option option4">
          <p className="item-description" style={{marginRight: 'auto'}}>
            City
          </p>
          <RiExpandUpDownFill size={16} />
        </div>
        <div className="option option5">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Customer Name
          </p>
          <IoIosSearch size={16} style={{marginLeft: 'auto'}} />
        </div>
        <div className="option option6">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Order Value
          </p>
          <RiExpandUpDownFill size={16} />
        </div>
        <div className="option option7">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Status
          </p>
          <RiExpandUpDownFill size={16} />
        </div>
        <div className="option option8">
          <p className="item-description" style={{marginRight: 'auto'}}>
            Operation
          </p>
          <RiExpandUpDownFill size={16} />{' '}
        </div>
      </div>
      <div>
        {tableData.map(each => (
          <div className="table-details">
            <div className="option1 options">
              <CgMathPlus size={14} style={{marginLeft: '0px'}} />
              <input type="checkbox" />
            </div>
            <div className="option option2">
              <p className="item-description" style={{marginRight: '8px'}}>
                <img
                  height={28}
                  src="https://oddeveninfotech.com/images/serv_icons/shopify-services.png"
                  alt="shopify-img"
                />
              </p>
            </div>
            <div className="option option3">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.order_no}
              </p>
            </div>
            <div className="option option3">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.order_date}
              </p>
            </div>
            <div className="option option4">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.city}
              </p>
            </div>
            <div className="option option5">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.customer_name}
              </p>
            </div>
            <div className="option option6">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.order_value}
              </p>
            </div>
            <div className="option option7">
              <p className="item-description" style={{marginRight: 'auto'}}>
                {each.status}
              </p>
            </div>
            <div className="option option8">
              <select className="item-select">
                <option value="actions" className="actions">
                  Actions
                </option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="page-change-btn-container">
      <button type="button" className="change-page-btn">
        <MdArrowBackIos size={16} className="page" />
      </button>
      <button type="button" className="change-page-no">
        1
      </button>
      <button type="button" className="change-page-btn">
        <MdArrowForwardIos size={16} className="page" />
      </button>
      <div className="page-count">
        <p>20 / page</p>
        <IoIosArrowDown size={12} style={{marginLeft: '6px'}} />
      </div>
    </div>
  </div>
)

export default OrdersContent
