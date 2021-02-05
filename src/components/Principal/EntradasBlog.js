import React from 'react';
import { SeccionInferior, Blog, Testimonial } from '../../elements/Principal';

export const EntradasBlog = () => {
  return (
    <SeccionInferior className="contenedor seccion">
      <section className="entrada-blog">
        <h3 className="text-center">Nuestro blog</h3>

        <Blog>
          <div className="imagen-blog">
            <img src="/img/blog1.jpg" alt="" />
          </div>
          <div className="contenido-blog">
            <a href="sa">
              <h4>Terraza en el techo de tu casa</h4>
            </a>
            <p>
              Escrito el: <span>20/10/2019</span> por: <span>Admin</span>
            </p>
            <p>
              Consejos para construir una terraza en el techo de tu casa, con
              los mejores materiales y ahorrando dinero.
            </p>
          </div>
        </Blog>

        <Blog>
          <div className="imagen-blog">
            <img src="/img/blog2.jpg" alt="" />
          </div>
          <div className="contenido-blog">
            <a href="sa">
              <h4>Guía para la decoración de tu hogar</h4>
            </a>
            <p>
              Escrito el: <span>20/10/2019</span> por: <span>Admin</span>
            </p>
            <p>
              Maximiza el espacio en tu hogar con esta guia, aprende a combinar
              muebles y colores para darle vida a tu espacio.
            </p>
          </div>
        </Blog>
      </section>

      <section className="testimoniales">
        <h3 className="text-center">Testimoniales</h3>
        <Testimonial>
          <blockquote>
            El personal se comportó de una excelente forma, muy buena atención y
            la casa que me ofrecieron cumple con todas mis expectativas
          </blockquote>
          <p>- Brandon Ticona </p>
        </Testimonial>
      </section>
    </SeccionInferior>
  );
};
