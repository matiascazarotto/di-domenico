import React from 'react';
import { styled } from '@mui/system';

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100vh', // Define a altura para ocupar toda a tela verticalmente
  background: 'url("/imgs/wppgreen.jpg") center/cover no-repeat', // Define a imagem de fundo e seu posicionamento
  transition: 'background-color 0.5s ease', // Adiciona uma transição suave para a cor de fundo
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Escurece a cor de fundo ao passar o mouse
  },
});

const LinkContainer = styled('a')({
  position: 'absolute',
  top: '50%', // Posiciona o link no centro verticalmente
  left: '50%', // Posiciona o link no centro horizontalmente
  transform: 'translate(-50%, -50%)', // Centraliza o link
  cursor: 'pointer',
  transition: 'transform 0.9s ease', // Adiciona uma transição suave para a escala do link
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.2)', // Aumenta ligeiramente a escala do link ao passar o mouse
  },
});

const Image = styled('img')({
  width: '200px', // Defina a largura da imagem conforme necessário
  height: 'auto', // Mantém a proporção da imagem
});

function SpotifySection() {
  return (
    <Container>
      <LinkContainer href="https://open.spotify.com/user/12161372092?si=v5VyS3ArTASaskGxGibkAA" target="_blank">
        <Image src="/imgs/logo-spotify.png" alt="Spotify" />
      </LinkContainer>
    </Container>
  );
}

export default SpotifySection;