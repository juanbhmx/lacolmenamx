import React, {Component} from 'react';
import logo from './login.svg';
import './App.css';
import Login from './components/login/';
import Register from './components/signup';
import CartPrice from './components/CartPrice';
import Home from './components/content';
import NosotrosL from './components/nosotros';
import Booking from './components/contacto';
import { Nosotros } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component
{
  
  render()
  {

    return (
      <Router>
      <div>
        <header id="header">
          <div class="header_top">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <div class="contactinfo">
                    <ul class="nav nav-pills">
                      <li><a href="#"><i class="fa fa-phone"></i> +52 1 771 243 05 61</a></li>
                    <li><a href="#"><i class="fa fa-envelope"></i> 20171051@uthh.edu.mx</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="social-icons pull-right">
                    <ul class="nav navbar-nav">
                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                      <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="header-middle">
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <div class="logo pull-left item">
                  <img className="logo" src={logo} />
                    
                  </div>
    {/*
                  <div class="btn-group pull-right">
                   <div class="btn-group">
                      <button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                        USA
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a href="#">Canada</a></li>
                        <li><a href="#">UK</a></li>
                      </ul>
                    </div>
                    
                    <div class="btn-group">
                      <button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                        DOLLAR
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a href="#">Canadian Dollar</a></li>
                        <li><a href="#">Pound</a></li>
                      </ul>
                    </div>
                  </div>
    */}
                </div>
                <div class="col-sm-8">
                  <div class="shop-menu pull-right">
                    <ul class="nav navbar-nav">
                      <li><a href="/login"><i class="fa fa-user"></i> Iniciar Sesion</a></li>
                      <li>
                        <hr/>
                        <Switch class="row">
                          
                          <Route path="/login" component={Login}>
                            <Login/>
                          </Route>
                        </Switch>
                      </li>
                      <li><a href="/CartPrice"><i class="fa fa-shopping-cart"></i> Carrito</a></li>
                      <li>
                        <hr/>
                        <Switch >
                          <Route path="/CartPrice" component={CartPrice}>
                            <CartPrice/>
                          </Route>
                        </Switch>
                      </li>
                      <li><a href="/register" ><i class="fa fa-lock"></i> Registrarme</a></li>
                      <li>
                        <hr/>
                        <Switch >
                          <Route path="/register" component={Register}>
                            <Register/>
                          </Route>
                        </Switch>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div class="header-bottom">
            <div class="container">
              <div class="row">
                <div class="col-sm-9">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>
                  <div class="mainmenu pull-left">
                    <ul class="nav navbar-nav collapse navbar-collapse">
                      <li><a href="/" class="">Home</a></li>
                      
                      <li class="dropdown"><a href="/">Productos<i class="fa fa-angle-down"></i></a>
                                          <ul role="menu" class="sub-menu">
                                              
                          <li><a href="#">Shampoo</a></li> 
                          <li><a href="#">Dulces</a></li> 
                          <li><a href="#">Galletas</a></li> 
                          <li><a href="#">Miel</a></li> 
                                          </ul>
                      </li> 
                      <li class="dropdown"><a href="/nosotros">Nosotros</a></li> 
                      <li><a href="/contacto">Contacto</a></li>
                    </ul>
                  </div>
                </div>
                <div class="content">
                  <div class="search_box pull-right">
                    <input type="text" placeholder="Productos"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
                        <Switch >
                          <div id="sportswear" class="panel ">
                          <Route path="/contacto" component={Booking}>
                            <Booking/>
                          </Route>
                          </div>
                          <Route path="/content" component={Home}></Route>
                          </Switch>                 
                          <Switch >
                          <Route path="/nosotros" component={NosotrosL}>
                            <NosotrosL/>
                          </Route>
                        </Switch>
  {/*         
        <section id="slider">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div id="slider-carousel" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#slider-carousel" data-slide-to="1"></li>
                    <li data-target="#slider-carousel" data-slide-to="2"></li>
                  </ol>
                  
                  <div class="carousel-inner">
                    <div class="item active">
                      <div class="col-sm-6">
                        <h1><span>THERICH</span>-SHOP</h1>
                        <h2>Free E-Commerce Template</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button type="button" class="btn btn-default get">Get it now</button>
                      </div>
                      <div class="col-sm-6">
                        <img src="assets/images/home/girl1.jpg" class="girl img-responsive" alt="" />
                        <img src="assets/images/home/pricing.png"  class="pricing" alt="" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="col-sm-6">
                        <h1><span>THE</span>-POST</h1>
                        <h2>100% Responsive Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button type="button" class="btn btn-default get">Get it now</button>
                      </div>
                      <div class="col-sm-6">
                        <img src="assets/images/home/girl2.jpg" class="girl img-responsive" alt="" />
                        <img src="assets/images/home/pricing.png"  class="pricing" alt="" />
                      </div>
                    </div>
                    
                    <div class="item">
                      <div class="col-sm-6">
                        <h1><span>THE</span>-POST</h1>
                        <h2>Free Ecommerce Template</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button type="button" class="btn btn-default get">Get it now</button>
                      </div>
                      <div class="col-sm-6">
                        <img src="assets/images/home/girl3.jpg" class="girl img-responsive" alt="" />
                        <img src="assets/images/home/pricing.png" class="pricing" alt="" />
                      </div>
                    </div>
                    
                  </div>
                  
                  <a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
                    <i class="fa fa-angle-left"></i>
                  </a>
                  <a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </section>
   */}       
   {/*---------------------------------------Menus----------------------------------------------------------------------*/}

<Route exact path='/' component={Home} />
   {/*-------------------------------------------------------------------------------------------------------------*/}
        
        <footer id="footer">{/*
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-sm-2">
                  <div class="companyinfo">
                    <h2><span>THE</span>-POST</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                  </div>
                </div>
                <div class="col-sm-7">
                  <div class="col-sm-3">
                    <div class="video-gallery text-center">
                      <a href="#">
                        <div class="iframe-img">
                          <img src="assets/images/home/iframe1.png" alt="" />
                        </div>
                        <div class="overlay-icon">
                          <i class="fa fa-play-circle-o"></i>
                        </div>
                      </a>
                      <p>Circle of Hands</p>
                      <h2>24 DEC 2014</h2>
                    </div>
                  </div>
                  
                  <div class="col-sm-3">
                    <div class="video-gallery text-center">
                      <a href="#">
                        <div class="iframe-img">
                          <img src="assets/images/home/iframe2.png" alt="" />
                        </div>
                        <div class="overlay-icon">
                          <i class="fa fa-play-circle-o"></i>
                        </div>
                      </a>
                      <p>Circle of Hands</p>
                      <h2>24 DEC 2014</h2>
                    </div>
                  </div>
                  
                  <div class="col-sm-3">
                    <div class="video-gallery text-center">
                      <a href="#">
                        <div class="iframe-img">
                          <img src="assets/images/home/iframe3.png" alt="" />
                        </div>
                        <div class="overlay-icon">
                          <i class="fa fa-play-circle-o"></i>
                        </div>
                      </a>
                      <p>Circle of Hands</p>
                      <h2>24 DEC 2014</h2>
                    </div>
                  </div>
                  
                  <div class="col-sm-3">
                    <div class="video-gallery text-center">
                      <a href="#">
                        <div class="iframe-img">
                          <img src="assets/images/home/iframe4.png" alt="" />
                        </div>
                        <div class="overlay-icon">
                          <i class="fa fa-play-circle-o"></i>
                        </div>
                      </a>
                      <p>Circle of Hands</p>
                      <h2>24 DEC 2014</h2>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="address">
                    <img src="assets/images/home/map.png" alt="" />
                    <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        */}
          <div class="footer-widget">
            <div class="container">
              <div class="row">
                <div class="col-sm-2">
                  <div class="single-widget">
                    <h2>Servicios</h2>
                    <ul class="nav nav-pills nav-stacked">
                      <li><a href="#">Miel de calidad</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="single-widget">
                    <h2>Productos</h2>
                    <ul class="nav nav-pills nav-stacked">
                      <li><a href="#">Miel</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="single-widget">
                    <h2>Politicas</h2>
                    <ul class="nav nav-pills nav-stacked">
                      <li><a href="#">Terminos de uso</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="single-widget">
                    <h2>Acerda de</h2>
                    <ul class="nav nav-pills nav-stacked">
                      <li><a href="#">inf. de la Empresa</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-3 col-sm-offset-1">
                  <div class="single-widget">
                    <h2>Suscribirse</h2>
                    <form action="#" class="searchform">
                      <input type="text" placeholder="Escribe tu email" />
                      <button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>
                      <p>Consigue promociones <br />directamente en tu correo</p>
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <p class="pull-left">Copyright © 2020 La colmena.</p>
                
              </div>
            </div>
          </div>
          
        </footer>
      
      </div>
      </Router>
    ) 
  }
}
 export default App;