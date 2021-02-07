import { Link } from 'react-router-dom';
import { Barra, ContenedorNav, ContenidoNav } from '../elements/Principal';

export const Navegacion = () => {
  return (
    <ContenedorNav>
      <ContenidoNav className="contenedor">
        <Barra>
          <Link to={'/'}>
            <img src="/img/logo.svg" alt="Logo Bienes Raices" />
          </Link>

          <nav>
            <Link to={'/nosotros'}>Nosotros</Link>
            <Link to={'/propiedades'}>Propiedades</Link>
            <Link to={'/blogs'}>Blog</Link>
            <Link to={'/contacto'}>Contacto</Link>
          </nav>
        </Barra>
      </ContenidoNav>
    </ContenedorNav>
  );
};
