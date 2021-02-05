import { BannerContacto } from '../components/Principal/BannerContacto';
import { EntradasBlog } from '../components/Principal/EntradasBlog';
import { Footer } from '../components/Principal/Footer';
import { BannerPrincipal } from '../components/Principal/BannerPrincipal';
import { Main } from '../components/Principal/Main';
import { Servicios } from '../components/Principal/Servicios';

export const Principal = () => {
  return (
    <>
      <BannerPrincipal />
      <Servicios />
      <Main />
      <BannerContacto />
      <EntradasBlog />
      <Footer />
    </>
  );
};
