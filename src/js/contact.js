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
      <Header contact={true} />
      <Lead>
        <h3 className="lead_title">Contact <del>{props.redactedCompany}</del></h3>
      </Lead>
      <About />
      <Footer redactedCompany={props.redactedCompany}/>
    </section>
  )
};
