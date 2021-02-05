import React from 'react';
import { Header, ContenedorHeader, Barra } from '../../elements/Principal';

export const BannerPrincipal = () => {
  return (
    <>
      <Header>
        <ContenedorHeader className="contenedor">
          <Barra>
            <a href="/">
              <img src="/img/logo.svg" alt="Logo Bienes Raices" />
            </a>

            <nav>
              <a href="nosotros">Nosotros</a>
              <a href="anuncios">Anuncios</a>
              <a href="blog">Blog</a>
              <a href="contacyo">Contacto</a>
            </nav>
          </Barra>

          <h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
        </ContenedorHeader>
      </Header>
    </>
  );
};
