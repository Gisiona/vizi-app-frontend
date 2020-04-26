import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Entre em contato</h2>
        <hr />
        <address>
          <strong>Mega Hack - COVID-19</strong>
          <br />
          Av. Interlagos 1234, São Paulo
          <br />
          Interlagos, São Paulo, SP, 0466100
          <br />
        </address>
        <address>
          <abbr title="Phone">P:</abbr>
          (11) 97951-0575
          <br />
          <abbr title="Email">E-mail:</abbr>
          <a href="mailto:#">helo@voziapp.com.br</a>
        </address>
      </React.Fragment>
    );
  }
}

export default ContactUs;
