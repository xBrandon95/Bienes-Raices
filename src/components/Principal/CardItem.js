import React from 'react';
import {
  Card,
  ContenidoCard,
  Iconos,
  ListaIconos,
} from '../../elements/Principal';

export const CardItem = (props) => {
  const {
    imagen,
    nombre,
    descripcion,
    precio,
    wc,
    dormitorios,
    estacionamiento,
  } = props;

  return (
    <>
      <Card>
        <img className="imagenes" src={`/img/${imagen}`} alt="casa lago" />
        <ContenidoCard>
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
          <p className="precio">{precio}</p>
          <ListaIconos>
            <Iconos>
              <img src="/img/icono_wc.svg" alt="baño" />
              {wc}
            </Iconos>

            <Iconos>
              <img src="/img/icono_dormitorio.svg" alt="dormitorio" />
              {dormitorios}
            </Iconos>

            <Iconos>
              <img src="/img/icono_estacionamiento.svg" alt="estacionamiento" />
              {estacionamiento}
            </Iconos>
          </ListaIconos>
          <a href="casa" className="btn btn-naranja d-block">
            Ver Propiedad
          </a>
        </ContenidoCard>
      </Card>
    </>
  );
};
