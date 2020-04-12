import React, { Component } from "react";

class Vizers extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Vizers</h2>
        <hr />
        <address>
          <strong>Mega Hack - COVID-19</strong>
          <br />
          3481 Melrose Place
          <br />
          Beverly Hills, CA 90210
          <br />
        </address>
        <address>
          <abbr title="Phone">P:</abbr>
          (123) 456-7890
          <br />
          <abbr title="Email">E:</abbr>
          <a href="mailto:#">name@example.com</a>
        </address>
      </React.Fragment>
    );
  }
}

export default Vizers;
