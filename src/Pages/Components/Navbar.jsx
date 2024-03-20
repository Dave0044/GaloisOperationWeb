// Navbar.jsx

import React from 'react';

function Navbar() {
  return (
    <nav className="navbar shadow text-center navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand navbarlogocss" href="#about">Galois Fields Operations</a>
          <button className="navbar-toggler px-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon px-1"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav info navbarlinkcss">
            <li className="nav-item px-1">
              <a className="nav-link" href="#about">Galois</a>
            </li>
            <li className="nav-item px-1 dropdown">
              <a className="nav-link dropdown-toggle" href="#education" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Operations
              </a>
              <ul className="dropdown-menu px-1">
                <li><a className="dropdown-item" href="#list-item-1">Operations in GF(2)</a></li>
                <li><a className="dropdown-item" href="#list-item-2">Operations in GF(2m)</a></li>
                <li><a className="dropdown-item" href="#list-item-3">Operations in GF(2mt)</a></li>
              </ul>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
