import React, { useState } from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


function Login() {
    
    const history = useHistory();
    const [id, setId ] = useState('');

    const data = {
        id
    };

    async function handleLogin (e){
        e.preventDefault();
        
        try {
            const response = await (await api.post('http://localhost:5000/sessions', data)).data;

            console.log('DATA ID:' + response.data.nome);
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.nome);

            history.push('/profile');
        } catch (e) {
            alert('Falha ao fazer login. Tente novamente mais tarde.');
        }
    }

    return (
        <section>
            <img class="wave" src="img/home.png" />
            <div class="container">
                <div class="img">
                    <img src="img/bg2.svg">
                </div>
                <div class="login-content">
                    <form action="index.html">
                        <img src="img/avatar.svg">
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                        <div class="i">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                            <h5>Username</h5>
                            <input type="text" class="input">
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                            <i class="fas fa-lock"></i>
                        </div>
                        <div class="div">
                            <h5>Password</h5>
                            <input type="password" class="input">
                        </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" class="btn" value="Login">
                    </form>
                </div>
                </div>
        </section>
    );
}

export default Login;