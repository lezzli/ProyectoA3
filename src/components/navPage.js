import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./SignIn.js"
import logo from "../img/logo.png"
import "../styles/navbar.css"
import Home from "./Home.js";
import ForgotPage from "./ForgotPage.js";

function navPage() {
  return (
    <Router>
  <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  <img className="logo" src={logo}/>


  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to="/home">Home</Link>
      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
      <Link className="navbar-link" to="/home">More</Link>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contacto
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is primary">
          <strong><Link to="/LogIn">Inicia Sesión</Link></strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    <div>
    <Routes>
          <Route path="/logIn" element={<SignIn/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/resetPassword" element={<ForgotPage/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default navPage;