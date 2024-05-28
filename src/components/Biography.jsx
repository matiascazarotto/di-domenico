import React from 'react';
import { styled } from '@mui/system';

const BiographyContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '@media (min-width: 1100px)': {
    flexDirection: 'row',
  },
});

const ImageContainer = styled('div')({
  flex: '0 0 auto',
  marginBottom: '-7px',
  '@media (min-width: 800px)': {
    marginRight: '50px',
  },
  position: 'relative',
});

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  border: 'none',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
  marginBottom: '0',
  '@media (min-width: 800px)': {
    width: '600px',
  },
});

const TextContainer = styled('div')({
  flex: '1',
});

const Title = styled('h2')({
  fontFamily: 'Archivo Black, sans-serif',
  fontSize: '36px',
  color: '#FFFFFF',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
  position: 'relative',
  padding: '10px 20px',
  margin: '-40px 0 0 0',
  '@media (min-width: 1100px)': {
    fontSize: '90px',
    top: '70px',
    left: '88%',
    position: 'absolute',
    margin: '0',
  },
});

const Paragraph = styled('p')({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#ffffff',
  padding: '5px 20px',
  '@media (min-width: 900px)': {
    fontSize: '18px',
  },
});

function Biography() {
  return (
    <BiographyContainer>
      <ImageContainer>
        <Image src="di-domenico/imgs/pics/bio.jpg" alt="Artist" />
        <Title>BIOGRAFIA</Title>
      </ImageContainer>
      <TextContainer>
        <Paragraph>
          Nascido em 1999 e criado em Rodeio-Bonito/RS, Eduardo Di Domenico apaixonou-se pela música eletrônica em 2019 e logo no ano seguinte fez primeiro curso de mixagem com Marcos Deon, aprofundando-se cada vez mais no gênero e criando sua própria identidade sonora com uma bassline intensa e ritmada que transita por varias vertentes do House, sendo as principais Tech House e House.
          Após 5 anos de discotecagem e diversas gigs, Di Domenico adquiriu uma leitura  apurada de pista que o permite transitar suave e livremente dentre vários estilos do House proporcionado uma experiência única e um set que apenas o próprio entrega.
          Em 2024 mais conectado e maduro profissionalmente o DJ resolveu por em prática um projeto em que vinha trabalhando a anos, e assim nasceu Freaknc, sua label underground.
          Natural do interior e Dj assíduo da cena regional por cinco anos, atualmente encontra-se residindo em São-Paulo em busca de novos desafios para sua carreira.
        </Paragraph>
      </TextContainer>
    </BiographyContainer>
  );
}

export default Biography;
