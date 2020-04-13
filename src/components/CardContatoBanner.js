
import React, { Component} from "react";
import Contato from  "./Contato";

class CardContatoBanner extends Component {
  render() {
    return (
      <section className="bg-light py-5 mb-5" id="faca-seu-cadastro">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="container col-lg-12">
                <h1 className="display-4 text-warning mt-5 mb-2">
                  Faça seu cadastro aqui
                </h1>
                <Contato />
              </div>
            </div>
          </div>
      </section>
      
    );
  }
}

export default CardContatoBanner;
