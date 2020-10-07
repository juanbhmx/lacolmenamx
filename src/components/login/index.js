import React  from "react";
import loginImg from "../../login.svg";
import Home from '../content';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import './style.scss'
import signup from '../signup/register';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

export class Login extends React.Component{
    constructor(props){
            super(props);
        }
        render(){
            return <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    {/*<div className="image">
                        <img src={loginImg}></img>
                    </div> */}
                    <form onSubmit={this.loginHandler} autoComplete="off">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <input type="text" name="username" placeholder="Usuario"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" placeholder="Contraseña"></input>
                        </div>
                        <button type="button" className="btn">Login</button>
                    </div>
                    </form>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    
                    <Link to="/forget-password">Olvidaste tu contraseña?</Link>
                </div><Route exact path='/' component={Home} />
            </div>
            
        }
    }
    export default Login;