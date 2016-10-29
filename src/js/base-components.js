import React from 'react';

export const Header = (props) => {
  return (
    <header className="header">
      <h1>
        <a href="/" className="logo">
          <img src="./assets/logo.png" className="logo_img">
        </a>
      </h2>
      <nav className="nav">
        <h2><a href="./work-boats" className={"nav_link" + (props.workboats ? "nav_link--active" : "")}>Work Boats</a></h2>
        <h2><a href="./yachts" className={"nav_link" + (props.yachts ? "nav_link--active" : "")}>Yachts</a></h2>
        <h2><a href="./contact-us" className={"nav_link" + (props.contact ? "nav_link--active" : "")}>Contact Us</a></h2>
      </nav>
    </header>
  )
};

export const Lead = (props) => {
  return (
    <section className="lead">
      {props.children}
    </section>
  )
};

export const Footer = (props) => {
  return (
    <footer className="footer">
      <p className="footer_copy">&copy; 2016 <del>{props.companyRedacted}</del></p>
    </footer>
  )
};
