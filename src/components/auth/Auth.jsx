import React, { Component } from "react";
import { useForm } from 'react-hook-form'
import './Auth.css'
import LogoFlex from '../layout/LogoFlexDev.png'

export default class Auth extends Component {
    constructor(props){
        super(props)
    }
    
    render(){

    return (
        <div className="FormAuth">
            <div className="ForteTitleDiv">
                <label className="ForteTitle"><h1>FORTE <img src={LogoFlex} className="imagemLogo" /></h1></label>
                <label className="ForteSubTitle"><h1>Multiflex</h1></label>
            </div>

            <h2>Efetue o login</h2>
            <form onSubmit={console.log('nada')}>
                <label>Login :</label>
                <input type="text" placeholder="Digite seu login aqui" />
                <label>Senha: </label>
                <input type="password" placeholder="Digite sua senha aqui" />
                <button type="submit">Logar</button>
            </form>
        </div>
    )}
}