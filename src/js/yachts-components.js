import React from 'react';
import { Header, Lead, Footer } from './base-components';



export default const Page = (props) => {
  return (
    <section className="landing">
      <Header yachts={true} />
      <Lead>
        <h3 className="lead_title">Yachts</h3>
        <h4 className="lead_subtitle">Seamless Styling, Exceptional Engineering</h4>
      </Lead>
      <Products />
      <Footer />
    </section>
  )
}
