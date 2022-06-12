import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import MyInfo from './pages/MyInfo'
import { useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from './firebase-config'


function App() {
  const [isAuth, setIsAuth] = useState(false);


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/" className="links"> Home </Link>


        {!isAuth ? (
          <>
            <Link to="/login" className="links"> Login </Link>
            <Link to="/login" className="logo"> What Did You Do Today<br />To Improve Yourself </Link>
          </>
        ) : (
          <>
            <Link to="/createpost" className="links"> Create Post </Link>
            <Link to="/" className="my-infos">{auth.currentUser.displayName}</Link>
            
            
            <button className="register-btn" onClick={signUserOut}> Log Out</button>
            <Link to="/" className="logo2"> What Did You Do Today<br />To Improve Yourself </Link>

          </>
        )}

      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/myinfo" element={<MyInfo isAuth={isAuth} />} />
        <Route path="/login/*" element={<Login setIsAuth={setIsAuth} />} />
      
      </Routes>
    </Router>
  );
}

export default App;



// <img
// className="topImg"
// src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
// alt=""
// />