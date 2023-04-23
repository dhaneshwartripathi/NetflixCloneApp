import './App.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from "./pages/home/Home";
import Watch from './pages/watch/Watch';
import {
  BrowserRouter as Router, Navigate, Route, Routes
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />} />



        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />


        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

        {
          user && (
            <>

              <Route path="/movies" element={<Home type="movie" />} />



              <Route path="/series" element={<Home type="series" />} />


              <Route path="/watch" element={<Watch />} />

            </>
          )
        }
      </Routes>

    </Router>

  );
}

export default App;
