import React from 'react';
import { Header, Lead, Footer } from './base-components';

const About = (props) => {
  return (
    <section className="about">
      
    </section>
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
