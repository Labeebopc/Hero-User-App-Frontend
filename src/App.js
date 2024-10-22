
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Box } from '@mui/material'
import { Dashboard } from './components/dashboard/Dashboard';
import { SinglePost } from './components/single_post/SinglePost';
import Form from './components/form/Form';

function App() {
  const { user } = useSelector(state => state.user)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {

    if (location.pathname === "/") {
      navigate("/login")
    }
    
  }, [])
  return (
    <>
      <ToastContainer />
      <Box component="section" sx={{padding: "0", margin:"0"}}>
          <Routes>
              <Route exact path='register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
              {/* <Route exact path='/' element={<Login />} /> */}
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/post' element={<Form />} />
              <Route exact path='/post/:id' element={<SinglePost />} />
          </Routes >
      </Box>
    </>
  );
}


export default App;
