import React from 'react';

export const Header = (props) => {
  return (
    <header className="header_parent">
      <div className="header">
        <a href="/" className="header_title">
          <h1 className="header_title_logo">
            <img src="./assets/logo.png" className="header_title_logo_img" alt="Redacted company logo" />
          </h1>
        </a>
      </div>
      <nav className="nav">
        <h3 className="nav_header"><a href="./work-boats" className={"nav_link" + (props.workboats ? "nav_link--active" : "")}>Work Boats</a></h3>
        <h3 className="nav_header"><a href="./yachts" className={"nav_link" + (props.yachts ? "nav_link--active" : "")}>Yachts</a></h3>
        <h3 className="nav_header"><a href="./contact-us" className={"nav_link" + (props.contact ? "nav_link--active" : "")}>Contact Us</a></h3>
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
