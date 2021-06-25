import React from "react";

export default function ContactUs() {
  return (
    <div id="contact-us" className="contact-us">
      <div className="page-wrapper">
        <h3 className="contact-us_title">Estamos aquí para ti</h3>
        <div>
          En el Albergue Celenis, nos tomamos a nuestros huéspedes muy en serio.
          Si tienes cualquier solicitud, protesta o consulta, por favor
          envíanosla y nos pondremos en contacto contigo para ayudarte.
        </div>
        <div className="contact-us_content">
          <div className="contact-us_content_info">
            <div>
              Rua as Silgadas, Nr.16, <br />
              36650 Caldas de Reis, Pontevedra <br />
            </div>
            <a
              href="https://www.google.com/maps/place/Albergue+Celenis/@42.6047847,-8.6490338,15z/data=!4m2!3m1!1s0x0:0xa9fdf627cd04ef27?sa=X&ved=2ahUKEwjhy-zrz5_xAhUVlFwKHaijCUoQ_BIwEnoECDMQBQ"
              className="contact-us_content_info_view-map"
              target="_blank"
            >
              Ver en Google Maps <span className="arrow">&rarr;</span>
            </a>
            <a href="tel:0034-650-714-355" className="phone">
              Telefono: +34 650 71 43 55
            </a>
            <div className="email">
              Correo electrónico: alberguecelenis@gmail.com
            </div>
          </div>
          <form action="" className="contact-us_content_form">
            <label htmlFor="form_name">Nombre</label>
            <input
              type="text"
              name="name"
              id="form_name"
              placeholder="Tu nombre"
            />
            <label htmlFor="form_email">Correo electronicol</label>
            <input
              type="text"
              name="email"
              id="form_email"
              placeholder="Tu correo para poder contestarte"
            />
            <label htmlFor="form_body">Tu mensaje</label>
            <textarea
              name="body"
              id="form_body"
              rows={10}
              placeholder="Escribe aquí tu mensaje"
            ></textarea>
            <button className="button button--dark">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
