import React from 'react'
import {Link} from "react-router-dom"
import bot from'../assets/bot-img.png'
function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{"background-color":"#6C6C6B" }}>
    <div className="container-fluid">
      <Link className="navbar-brand fs-1 fst-itallic" to="/">BankingApplication</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
         
        </ul>
      </div>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
      <img src={bot} style={{"max-width":"70px","max-height":"60px" ,"border-radius":"40px","margin-left":"30px"}}/>
    </form>
    </div>
  </nav></div>
  )
}
export default Navbar; 