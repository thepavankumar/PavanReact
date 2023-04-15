import React from 'react'

function Header() {
  return (
    <div className="top-bar" id="example-menu">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu="">
        <li className="menu-text text-tangerine">Pavan Kumar</li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        
      <li className="has-submenu">
          <a href="#0">Home</a>
        </li>
        <li className="has-submenu">
          <a href="#0">About Us</a>
        </li>
        <li className="has-submenu">
          <a href="#0">Portfolio</a>
        </li>
        <li className="has-submenu">
          <a href="#0">Contact Us</a>
        </li>
        <li>
          <input type="search" placeholder="Search" />
        </li>
        <li>
          <button type="button" className="button">
            Search
          </button>
        </li>
        <li style={{marginLeft: "10px"}}>
          {/* <a href="#0" class="button success secondary rounded bordered shadow margin-left-2">Hello, User!</a> */}
          <a href="#0" class="button secondary rounded bordered shadow margin-left-2">My account</a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Header