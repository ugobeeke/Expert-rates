// Layout.js
import React from 'react';
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-secondary nav-text p-3 ">
        <Link to="/"><span className="navbar-brand mb-0  h1 nav-text" style = {{ color: '#fff' }}> Home</span></Link>
        <Link to="/currencyConverter"><span className="navbar-brand mb-0 h1" style = {{ color: '#fff' }}>Converter</span></Link>
        <Link to="/"><span className="navbar-brand mb-0 h1" style = {{ color: '#fff' }}>Rates Table</span></Link>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-" type="submit">Search</button>
      </form>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="fixed-bottom bg-secondary text-white text-center p-3">
        <div className="social-links mt-3 text-center">
          <a href="https://twitter.com/thankgodoo" className="twitter" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter" style={{ fontSize: '25px', marginRight: '20px', color: '#fff' }}></i>
          </a>
          <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook" style={{ fontSize: '25px', marginRight: '20px', color: '#fff' }}></i>
          </a>
          <a href="https://www.instagram.com/" className="instagram" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram" style={{ fontSize: '25px', marginRight: '20px', color: '#fff' }}></i>
          </a>
          <a href="https://www.linkedin.com/in/nweke-thankgod-31537aa4/" className="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={{ fontSize: '25px', marginRight: '20px', color: '#fff' }}></i>
          </a>
        </div>
        <p style={{ color: '#fff' }}> Portfolio: https://sweet-praline-c070eb.netlify.app//</p>
      </footer>
    </React.Fragment>
  );
}

export default Layout;
