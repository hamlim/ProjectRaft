import React from 'react';
import { Header, Lead, Footer } from './base-components';

const About = (props) => {
  return (
    <p>Hello World!</p>
  )
};


export const Page = (props) => {
  return (
    <section className="landing">
      <Header />
      <Lead>
        <h2 className="lead_title">Custom Design, Engineering, Fabrication, and Service</h2>
      </Lead>
      <About />
      <Footer redactedCompany={props.redactedCompany} />
    </section>
  )
};
