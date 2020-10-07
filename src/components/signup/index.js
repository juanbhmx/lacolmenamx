import React  from "react";
import loginImg from "../../login.svg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import '../login/style.scss'
import signup from '../signup/register';

export class Login extends React.Component{
    constructor(props){
            super(props);
        }
        render(){
            return <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Registro</div>
                <div className="content">
                    {/* <div className="image">
                        <img src={loginImg}></img>
        </div> */}
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <input type="text" name="username" placeholder="Usuario"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Correo Electronico"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" placeholder="Contraseña"></input>
                        </div>
                        <button type="button" className="btn">Registrar</button>
                    </div>
                </div>
                
            </div>
        }
    }
    export default Login;