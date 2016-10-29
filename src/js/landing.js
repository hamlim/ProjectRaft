import React from 'react';
import { Header, Lead, Footer } from './base-components';

export default const Page = (props) => {
  return (
    <section className="landing">
      <Header />
      <Lead>
        <h3 className="lead_title">Custom Design, Engineering, Fabrication, and Service</h3>
      </Lead>
      <About />
      <Footer />
    </section>
  )
};
