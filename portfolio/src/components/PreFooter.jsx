import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
export const PreFooter = () => {
    return (
        <section id="contact" class="section-padding wow fadeInUp delay-05s">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center white">
                        <h2 class="service-title pad-bt15">Contactame</h2>
                        
                        <hr class="bottom-line black-bg" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="loction-info white">
      
                            <p className="pconta"> <MdOutlineMail style={{ width: '25px', height: '25px' , marginRight:'12px' }}  /> emicampos1268@gmail.com</p>
                            <p className="pconta">  <IoCallOutline style={{ width: '25px', height: '25px' , marginRight:'12px'}}  /> +542804198600</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="contact-form">
                            <div id="sendmessage">Your message has been sent. Thank you!</div>
                            <div id="errormessage"></div>
                            <form action="" method="post" role="form" class="contactForm">
                                <div class="col-md-6 padding-right-zero">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div class="validation"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div class="validation"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div class="validation"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                        <div class="validation"></div>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-submit">SEND NOW</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


}