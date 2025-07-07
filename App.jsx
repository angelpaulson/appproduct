import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import UserNavbar from './components/UserNavbar'
import Userdashboard from './components/Userdashboard'
import Admindashboard from './components/Admindashboard'
import Profile from './components/Profile'

function App() {
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem('user'))
  
  // Hide main navbar on dashboard routes or when user is logged in
  const showMainNavbar = !user && !['/user', '/admin'].includes(location.pathname)

  return (
    <>
      {showMainNavbar && <Navbar/>}
      {user && <UserNavbar user={user} />}
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/' element={<View/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/user' element={<Userdashboard />} />
        <Route path='/admin' element={<Admindashboard />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/Navbar'
// import Add from './components/Add'
// import View from './components/View'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import Login from './components/Login'
// import Signup from './components/Signup'
// import UserNavbar from './components/UserNavbar'
// import Userdashboard from './components/Userdashboard'
// import Admindashboard from './components/Admindashboard'


// function App() {
//   const [count, setCount] = useState(0)
//   const location = useLocation()
//   const isDashboardRoute = location.pathname === '/user' || location.pathname === '/admin'

//   return (
//     <>
      
//       {!isDashboardRoute && <Navbar/>}
//       <Routes>
//         <Route path='/add' element={<Add/>}/>
//         <Route path='/' element={<View/>}/>
//         <Route path='/login' element={<Login/>}/>
//            <Route path='/signup' element={<Signup/>}/>
//            <Route path='/user' element={<Userdashboard />} />
//            <Route path='/admin' element={<Admindashboard />} />
//       </Routes>
//     </>
//   )
// }

// export default App
