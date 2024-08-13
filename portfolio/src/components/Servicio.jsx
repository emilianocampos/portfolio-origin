import React from "react";
import '../css/servicio.css'
import img from '../img/tec.png'
export const ServicioItem = ({ servicioSpan, servicioTitulo, servicioDesc }) => {

    return (

        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service-item">
                <h3><span>{servicioSpan}</span>{servicioTitulo}</h3>
                <p>{servicioDesc}</p>
                
            </div>
        </div>
    )



}
export const Servicio = () => {
    return (


        <section id="service" class="section-padding wow fadeInUp delay-05s">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img src={img} alt=""  className="img"/>
                        <h2 class="service-title pad-bt15">Que hago?</h2>
                        <p class="sub-title pad-bt15">Me encargo de transformar ideas y diseños en sitios web funcionales y atractivos que no solo capturan la esencia de tu marca, sino que también ofrecen una experiencia de usuario excepcional.</p>
                        <hr class="bottom-line" />
                    </div>
                    <ServicioItem servicioSpan='D' servicioTitulo='iseño y desarrollo' servicioDesc='Combino creatividad y tecnología para ofrecer soluciones completas de diseño y desarrollo web. Desde un diseño visual impactante hasta una funcionalidad impecable, transformo tus ideas en una experiencia digital que cautiva y convierte' />
                    <ServicioItem servicioSpan='M' servicioTitulo='antenimiento web' servicioDesc='El mantenimiento de una web es el proceso continuo de gestionar, actualizar y optimizar un sitio web para garantizar su funcionamiento óptimo, seguridad y relevancia a lo largo del tiempo. Este mantenimiento es esencial para asegurar que el sitio web siga cumpliendo sus objetivos y ofreciendo una buena experiencia al usuario.' />
                    <ServicioItem servicioSpan='O' servicioTitulo='ptimización SEO' servicioDesc='El objetivo del SEO es atraer tráfico orgánico (no pagado) a tu sitio web, aumentando la probabilidad de que los usuarios encuentren tu contenido cuando busquen términos relacionados.' />
                </div>
            </div>
        </section>
    )

}