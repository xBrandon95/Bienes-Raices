import styled from '@emotion/styled';

export const ContenedorBlog = styled.div`
  width: 70%;
  margin: 0 auto;

  img {
    border-radius: 1.5rem;
  }
`;

export const DescripcionBlog = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .imagen-blog img {
    border-radius: 1.5rem;
  }
  .imagen-blog {
    flex-basis: 45%;
  }

  .contenido-blog {
    padding: 1.5rem;
    flex-basis: calc(55% - 2rem);
  }

  span {
    color: var(--naranja);
    font-weight: bold;
  }
`;
