import styled from '@emotion/styled';

export const ContenedorNosotros = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;

  img {
    border-radius: 1.5rem;
  }

  .contenido-nosotros h2 {
    font-weight: bold;
    padding-top: 3rem;
  }
`;
