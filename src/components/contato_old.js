import React, { Component, useState } from "react";
import api from '../services/viziappServices';

class Contato extends Component {

  render() {
      
    const [nomeFantasia, setNomeFantasia ] = useState('');
    const [telefoneWhatsapp, setTelefoneWhatsapp ] = useState('');
    const [email, setEmail ] = useState('');
    const [categoriaSegmento, setCategoriaSegmento ] = useState('');
    const [cnpjCpf, setCnpjCpf ] = useState('');
    const [senha, setSenha ] = useState('');
    const [endereco, setEndereco ] = useState('');
    const [descricao, setDescricao ] = useState('');
    
    const data = {
        "nome_fantasia" : nomeFantasia,
        "telefone_whatsapp" : telefoneWhatsapp,
        "email" : email,
        "categoria_negocio" : categoriaSegmento,
        "cnpj_cpf" : cnpjCpf,
        "senha_acesso" : senha,
        "endereco_completo" : endereco,
        "descricao_negocio" : descricao
    };


    async function handleCadastroComerciante (e){
        e.preventDefault();
        
        try {
            console.log("DATA: " + data);

            const response = await api.post('/estabelecimentos', data);

            console.log('DATA ID:' + response.data);            
        } catch (e) {
            alert('Falha ao cadastrar comerciante. Tente novamente mais tarde.');
        }
    }

    return (
        <section className='form'>
            <h2>Comerciante cadastre o seu negócio e comece a vender.</h2>
            <hr />
            <form onSubmit={handleCadastroComerciante}>
                <div className="row">           
                    <div className="col-md-6 mb-3">
                        <label for="ome-fantasia">Nome Fantasia</label>
                        <input type="text" 
                            className="form-control" 
                            id="nome-fantasia"
                            placeholder="Nome do seu negócio" 
                            required="true"
                            value={nomeFantasia}
                            onChange={e => setNomeFantasia(e.target.value)} />
                        <div className="invalid-feedback">
                            O campo nome fantasia é obrigatório
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="telefone-whatsapp">Telefone / WhatsApp</label>
                        <input type="text" 
                            className="form-control" 
                            id="telefone-whatsapp" 
                            placeholder="Telefone WhatsApp" 
                            required="true"
                            value={telefoneWhatsapp}
                            onChange={e => setTelefoneWhatsapp(e.target.value)} />
                        <div className="invalid-feedback">
                            o campo telefone celular é obrigatório
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label for="email">E-mail</label>
                        <input type="text" 
                            className="form-control" 
                            id="email" 
                            placeholder="E-mail para contato" 
                            required="true" 
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <div className="invalid-feedback">
                            O campo é-mail é obrigatório
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="segmento-negocio">Categoria / Segmento </label>
                        <input type="text" 
                            className="form-control" 
                            id="segmento-negocio" 
                            placeholder="Segmento do seu negócio" 
                            required="true" 
                            value={categoriaSegmento}
                            onChange={e => setCategoriaSegmento(e.target.value)} />
                        <div className="invalid-feedback">
                            o campo categoria é obrigatório
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label for="cnpj-cpf">CNPJ ou CPF</label>
                        <input type="text" 
                            className="form-control" 
                            id="cnpj-cpf" 
                            placeholder="CNPJ ou CPF" 
                            required="true"
                            value={cnpjCpf}
                            onChange={e => setCnpjCpf(e.target.value)} />
                        <div className="invalid-feedback">
                            o campo CNPJ ou CPF é obrigatório
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="senha-acesso">Senha</label>
                        <input type="text" 
                            className="form-control" 
                            id="senha-acesso" 
                            placeholder="Crie uma senha" 
                            required="true"
                            value={senha}
                            onChange={e => setSenha(e.target.value)} />
                        <div className="invalid-feedback">
                            o campo senha é obrigatório
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="endereco-completo">Endereço Completo</label>
                        <input type="text" 
                            className="form-control"
                            id="endereco-completo" 
                            placeholder="Endereço completo onde está localizado seu negócio" 
                            required="true" 
                            value={endereco}
                            onChange={e => setEndereco(e.target.value)} />
                        <div className="invalid-feedback">
                            o campo endereço é obrigatório
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label for="descricao-negocio">Descreva seu Negócio</label>
                        <textarea type="text"
                            className="form-control" 
                            id="descricao-negocio" 
                            placeholder="Descreva o maximo de informações sobre o seu negócio" 
                            required="true" 
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)} />
                        <div className="invalid-feedback">
                            Campo obrigatório
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 mb-3">
                        <button type='submit' className="btn btn-warning btn-lg"> Cadastrar &raquo;  </button>
                    </div>
                </div>

            </form>            
        </section>
    );
  }
}

export default Contato;