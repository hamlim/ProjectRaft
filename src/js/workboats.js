import React from 'react';
import { Header, Lead, Footer } from './base-components';

const Products = (props) => {
  return (
    <p>Hello World!</p>
  )
};

export const Page = (props) => {
  return (
    <section className="landing">
      <Header workboats={true} />
      <Lead>
        <h3 className="lead_title">Work Boats</h3>
        <h4 className="lead_subtitle">Weathertight and Watertight Solutions</h4>
      </Lead>
      <Products />
      <Footer redactedCompany={props.redactedCompany} />
    </section>
  )
};
