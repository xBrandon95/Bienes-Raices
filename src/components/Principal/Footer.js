import { SiteFooter } from '../../elements/Principal';

export const Footer = () => {
  return (
    <SiteFooter className="seccion">
      <div className="contenedor contenido">
        <nav>
          <a href="nosotros">Nosotros</a>
          <a href="anuncios">Anuncios</a>
          <a href="blog">Blog</a>
          <a href="contacyo">Contacto</a>
        </nav>
        <p>Todos los Derechos Reservados 2021 &copy;</p>
      </div>
    </SiteFooter>
  );
};
