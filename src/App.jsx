import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage/Homepage'
import Notfound from './components/Notfound/Notfound'
import Signup from './components/SignUp/Signup'
import Login from './components/Loginpage/Login'
import Dashboard from './components/Dashboardpage/Dashboard'
import Buydata from './components/Buydatapage/Buydata'
import Adminlogin from './components/AdminLoginpage/Adminlogin'
import Admindashboard from './components/AdminDashboardpage/Admindashboard'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import Buyairtime from './components/Buyairtimepage/Buyairtime'
import AdminBuydata from './components/AdminBuydatapage/AdminBuydata'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/buydata' element={<Buydata />} />
        <Route path='/adminlogin' element={<Adminlogin />} />
        <Route path='/buyairtime' element={<Buyairtime/>}/>
        <Route path='/admin/dashboard'
          element={
            <ProtectedAdminRoute>
              <Admindashboard />
            </ProtectedAdminRoute>
          }
        />
        <Route path='/admin/data' element={<AdminBuydata/>}/>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
