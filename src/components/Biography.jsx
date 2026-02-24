import React from 'react';
import { styled } from '@mui/system';

const BiographyContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
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
  transition: 'transform 0.9s ease',
  '&:hover': {
    backgroundColor: 'transparent',
    transform: 'scale(1.1)',
  },
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

const ParagraphText =
  `Di Domenico descobriu sua paixão pela música eletrônica em 2019 e, desde então, vem se aprofundando no gênero e construindo uma identidade sonora única. Ao longo de cinco anos de trajetória e muitas horas de pista, desenvolveu uma percepção apurada do público, o que lhe permite transitar com naturalidade pelas vertentes do House e criar sets que equilibram calor, cadência e energia.
Sua assinatura como DJ se estabelece na combinação entre basslines envolventes, fluidez rítmica e uma evolução constante que conduz a pista a momentos energéticos. Em 2024, essa maturidade artística o levou a criar a Freaknc, sua label underground, um projeto que nasce como extensão de seu amor pela música e que hoje se dedica à produção de eventos, podcasts mensais e lançamentos conectados às raízes da House Music.`

function Biography() {
  return (
    <BiographyContainer>
      <ImageContainer>
        <Image src="imgs/pics/bio.jpg" alt="Artist" />
        <Title>BIOGRAFIA</Title>
      </ImageContainer>
      <TextContainer>
        <Paragraph>
          {ParagraphText}
        </Paragraph>
      </TextContainer>
    </BiographyContainer>
  );
}

export default Biography;
