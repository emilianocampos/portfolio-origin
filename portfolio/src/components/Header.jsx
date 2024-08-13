import React, { useState } from "react";
import '../css/style.css'; // Asegúrate de que el archivo de estilo esté correctamente importado
import { motion } from 'framer-motion';
import '../css/header.css'
export const Header = () => {
  const bounceVariants = {
    initial: { y: 0 },
    hover: {
      y: [-12, -20, 0],
      

      transition: { duration: 3.5, type: 'spring', bounce: 1.5 }
    }
  };
  const [menu, setMenu] = useState(false);

  const handleClick = () => {



  }
  return (
    <div className="header">
      <div className="bg-color">
        <header id="main-header">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" onClick={handleClick} data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li className="active"><a href="#main-header">Home</a></li>
                  <li><a href="#feature">About</a></li>
                  <li><a href="#service">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#testimonial">Testimonial</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="banner-info text-center wow fadeIn delay-05s">
                <h2 className="bnr-sub-title"> Hola !, soy Emiliano Campos.</h2>
                <h1 className="bnr-title">Desarollador Web</h1>
                <p className="bnr-para">Convirtiendo ideas en productos de la vida real.</p>
                <div className="brn-btn">
                  <motion.a variants={bounceVariants}
                    initial="initial"
                    whileHover="hover" href="#" className="btn btn-download">Solicitar una demo</motion.a>

                </div>
                <div className="overlay-detail">
                  <a href="#feature"><i className="fa fa-angle-down"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}