import styled from '@emotion/styled';

// HEADER
export const Header = styled.header`
  background-image: url(/img/header.jpg);
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  height: 85vh;
  min-height: 60rem;
`;

export const ContenedorHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  h1 {
    color: var(--blanco);
    margin-bottom: 7rem;
    width: 60%;
  }
`;

export const Barra = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;

  nav a {
    color: var(--blanco);
    font-size: 2rem;
    margin-right: 2rem;
  }

  nav a:last-of-type {
    margin-right: 0;
  }

  nav a:hover {
    color: var(--verde);
  }
`;

// SERVICIOS
export const ContenedorServicios = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  div {
    flex-basis: calc(33.3% - 1rem);
  }

  h3 {
    text-transform: uppercase;
    margin-top: 1rem;
  }
`;

// MAIN
export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  background-color: var(--plomo2);
  border: 1px solid var(--plomo);
  border-radius: 1rem;
  flex-basis: calc(33.3% - 1rem);
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const ContenidoCard = styled.div`
  padding: 1rem 1.5rem;

  h3,
  p {
    margin: 0 0 1rem 0;
  }

  p.precio {
    color: var(--verde);
    font-weight: bold;
  }
`;

export const ListaIconos = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Iconos = styled.li`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.8rem;
  }
`;

// BANNER CONTACTO
export const BannerInfo = styled.section`
  background-image: url(/img/encuentra.jpg);
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  height: 35rem;
  display: flex;
  align-items: center;
  color: white;
`;

// BLOG Y TESTIMONIALES
export const SeccionInferior = styled.section`
  display: flex;
  justify-content: space-between;

  .entrada-blog {
    flex-basis: 60%;
  }

  .testimoniales {
    flex-basis: calc(40% - 1rem);
  }
`;

export const Blog = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  a {
    color: black;
    text-decoration: none;
  }

  h4 {
    margin: 0;
    line-height: 1.2;
    font-weight: 300;
  }

  h4::after {
    content: '';
    display: block;
    width: 15rem;
    height: 0.5rem;
    margin-top: 1rem;
    background-color: var(--verde);
  }

  span {
    color: var(--naranja);
    font-weight: bold;
  }

  .imagen-blog {
    flex-basis: 40%;
  }

  .contenido-blog {
    flex-basis: calc(60% - 3rem);
  }
`;

export const Testimonial = styled.div`
  background-color: var(--verde);
  font-size: 2.2rem;
  padding: 0.5rem;
  color: var(--blanco);
  border-radius: 2.5rem;

  p {
    text-align: right;
    font-size: 2rem;
    margin-right: 1.5rem;
  }

  blockquote {
    position: relative;
    padding-top: 3.5rem;
    padding-left: 2.5rem;
  }

  blockquote::before {
    position: absolute;
    content: '';
    background-image: url(/img/comilla.svg);
    background-position: center center;
    background-size: cover;
    display: block;
    width: 4rem;
    height: 4rem;
    top: 0;
    left: 0;
  }
`;

export const SiteFooter = styled.footer`
  background-color: var(--gris);
  margin: 0;
  padding: 3rem 0;
  color: var(--blanco);

  .contenido {
    display: flex;
    justify-content: space-between;
  }

  nav a {
    color: var(--blanco);
    font-size: 1.8rem;
    margin-right: 2rem;
  }

  nav a:last-of-type {
    margin-right: 0;
  }

  nav a:hover {
    color: var(--verde);
  }

  p {
    margin: 0;
    font-size: 1.8rem;
  }
`;

// NAVEGACION
export const ContenedorNav = styled.div`
  background-color: var(--gris);
`;

export const ContenidoNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
