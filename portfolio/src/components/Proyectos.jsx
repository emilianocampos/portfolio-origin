import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../css/swippercard.css'
import { EffectCards } from 'swiper/modules';
import react from '../img/react.png'
import js from '../img/jsx.png'
import git from '../img/git.png'
import next from '../img/nextjs.png'
import sql from '../img/swl.png'
import html from '../img/htmls.png'
import css from '../img/cssa.png'
import bootstrap from '../img/bootstrap.png'
import unity from '../img/unity.png'

import ps from '../img/ps.png'
import figma from '../img/figma.png'
import tw from '../img/tail.png'
import sass from '../img/sass.png'

import calcuSimple from '../img/3s.png';
import lista from '../img/listas.jpg';
import data from '../img/data.png'
import imc from '../img/imc.jpg'
import calc from '../img/calc.png'
import salud from '../img/salud.jpg'
import ravio from '../img/ravio.jpg'
import prox from '../img/prox.jpg'
import { wrap } from 'framer-motion';
import logo from '../img/logo.jpeg'
import { ImLink } from "react-icons/im";
export const ProyectosItem = ({ nombrePy, img, link, description }) => {


    return (
        <div className='container d-flex '>

            <div className='row'>

                <div class="col-sm-4">
                    <div class="img-wrapper">
                        <img src={img} alt="" style={{ height: '200px' }} />
                        <div class="overlay">
                            <div class="overlay-infos">
                                <h5>{nombrePy}</h5>
                                <p>{description}</p>
                                <a href={link}> <ImLink /></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}
export const Proyectos = () => {
    return (
        <section id="portfolio" className="section-padding wow fadeInUp delay-05s">

            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="service-title pad-bt15">Mis proyectos recientes</h2>

                        <hr className="bottom-line" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 mb-4">
                                <ProyectosItem img={data} nombrePy="Manipulación de datos" link="https://emilianocampos.github.io/apilol/" description='Aplicación que muestra
datos del juego League of Legends.' />
                            </div>
                            <div className="col-sm-4 mb-4">
                                <ProyectosItem img={calcuSimple} nombrePy="Calculadora regla
de tres simples (App)" link="https://regladetressimples.netlify.app/" description='Cálculo de tres simples.' />
                            </div>
                            <div className="col-sm-4 mb-4">
                                <ProyectosItem img={imc} nombrePy="Indice de
masa corporal (App)" link="https://imccalculater.netlify.app/" description='Aplicación que calcula
la masa corporal de una persona.' />
                            </div>
                            <div className="col-sm-4 mb-4">
                                <ProyectosItem img={lista} nombrePy="Lista de
medicamentos (App)" link="https://appmeds.netlify.app/" description='Aplicación que permite llevar un
control de la
fecha en que se
compro un medicamento.' />
                            </div>
                            <div className="col-sm-4 mb-4">
                                <ProyectosItem img={calc} nombrePy="Calculadora (App)" link="/npm install --save @fortawesome/fontawesome-free" description='Aplicación que suma, resta,
divide y multiplica
numeros ingresados.' />
                            </div>
                            <div className="col-sm-4 mb-4">
                                <ProyectosItem img={salud} nombrePy="Calculadora medica (App)" link="https://emilianocampos.github.io/Calculador/" description='Calculadora de analisis medico.' />
                            </div>
                            <div className="col-sm-4 mb-4">
                                <ProyectosItem img={logo} nombrePy="Cuki Nails CBA (Sitio web)" link="https://cukinails.netlify.app/" description='Sitio web creado para cliente.' />
                            </div>
                            <div className="col-sm-4 mb-4">
                                <ProyectosItem img={ravio} nombrePy="El Raviolito (Sitio web)" link="https://elraviolito.netlify.app/" description='Contribución de sitio web.' />
                            </div>
                            <div className="col-sm-4 mb-4">
                                <ProyectosItem img={prox} nombrePy="Contador de puntos de Truco (App)" link="/" description='Llevar la cuenta de la cantidad de puntos en el juego Argentino "Truco"' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='container tecs'>
                <p className="sub-title pad-bt15" style={{ color: 'black', fontSize: '2rem', fontWeight: '700' }}>TECNOLOGIAS QUE USO:</p>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={next} alt="" style={{ width: '100%' }} /><p>Next.Js</p></SwiperSlide>
                    <SwiperSlide><img src={react} alt="" style={{ width: '100%' }} /><p>React.Js</p></SwiperSlide>
                    <SwiperSlide><img src={js} alt="" style={{ width: '100%' }} /><p>JavaScript</p></SwiperSlide>
                    <SwiperSlide><img src={git} alt="" style={{ width: '100%' }} /><p>Git</p></SwiperSlide>
                    <SwiperSlide><img src={sql} alt="" style={{ width: '100%' }} /><p>MySQL</p></SwiperSlide>
                    <SwiperSlide><img src={html} alt="" style={{ width: '100%' }} /><p>HTML</p></SwiperSlide>
                    <SwiperSlide><img src={css} alt="" style={{ width: '100%' }} /><p>CSS</p></SwiperSlide>
                    <SwiperSlide><img src={bootstrap} alt="" style={{ width: '100%' }} /><p>Bootsrap</p></SwiperSlide>
                    <SwiperSlide><img src={unity} alt="" style={{ width: '100%' }} /><p>Unity</p></SwiperSlide>
                    <SwiperSlide><img src={figma} alt="" style={{ width: '100%' }} /><p>Figma</p></SwiperSlide>
                    <SwiperSlide><img src={tw} alt="" style={{ width: '100%' }} /><p>Tailwind</p></SwiperSlide>
                    <SwiperSlide><img src={sass} alt="" style={{ width: '100%' }} /><p>SASS</p></SwiperSlide>
                    <SwiperSlide><img src={ps} alt="" style={{ width: '100%' }} /><p>Photoshop</p></SwiperSlide>
                </Swiper>

            </div>
        </section>


    )


}