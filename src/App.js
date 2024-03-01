import NavigationBar from './components/NavigationBar'
import OrdersTab from './components/OrdersTab'
import OrdersTable from './components/OrdersTable'

import './App.css'

const App = () => (
  <div className="dashboard">
    <NavigationBar />
    <div className="dashboard-container">
      <OrdersTab />
      <OrdersTable />
    </div>
  </div>
)

export default App
