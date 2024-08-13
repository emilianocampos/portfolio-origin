import React from "react";
import img1 from "../img/ser01.png"
import img2 from "../img/ser02.png"
import img3 from "../img/ser03.png"

export const Inicio = () => {
    return (
        <section id="feature" class="section-padding wow fadeIn delay-05s">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="wrap-item text-center">
                            <div class="item-img">
                                <img src={img1} />
                            </div>
                            <h3 class="pad-bt15" >Concepto Creativo</h3>
                            <p className="pinit">Con un concepto creativo bien definido, puedes transformar tu presencia en línea, destacarte en un mar de competencia y ofrecer a tus usuarios una experiencia digital que no solo cumple, sino que supera sus expectativas. Porque en el mundo del desarrollo web, la creatividad no es un lujo; es una necesidad esencial para el éxito.</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="wrap-item text-center">
                            <div class="item-img">
                                <img src={img2} />
                            </div>
                            <h3 class="pad-bt15">Diseño increible</h3>
                            <p className="pinit">No solo creo páginas web; diseño experiencias que dejan una impresión duradera. Desde la primera visita hasta la última interacción, mi enfoque está en ofrecer una interfaz intuitiva y visualmente impactante que se alinea perfectamente con tus objetivos.</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="wrap-item text-center">
                            <div class="item-img">
                                <img src={img3} />
                            </div>
                            <h3 class="pad-bt15">Eficiencia en Costos</h3>
                            <p className="pinit">Creo que un diseño web excepcional no tiene que ser costoso. Mi misión es ofrecerte soluciones de diseño web que combinan calidad y eficiencia, permitiéndote obtener un sitio web impresionante sin romper tu tarjeta de credito</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>

    )


}