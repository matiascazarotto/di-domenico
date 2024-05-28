import React from 'react';
import { styled } from '@mui/system';

const BiographyContainer = styled('div')({
  display: 'flex',
  background: 'linear-gradient(to left, #AAAAAA 50%, transparent 30%)',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '@media (min-width: 1100px)': {
    flexDirection: 'row',
  },
});

const TextContainer = styled('div')({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (min-width: 1100px)': {
    alignItems: 'center',
    marginRight: '50px',
  },
});

const Title = styled('h2')({
  fontFamily: 'Archivo Black, sans-serif',
  color: '#DDDDDD',
  fontSize: '22px',
  textAlign: 'center',
  margin: '20px 20px',
  padding: '10px',
  '@media (min-width: 900px)': {
    fontSize: '40px',
    margin: '0',
  },
});

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  '@media (min-width: 800px)': {
    width: '600px',
  },
});

function Author() {
  return (
    <BiographyContainer>
      <TextContainer>
        <Title>EDUARDO DI DOMENICO</Title>
      </TextContainer>
        <Image src="/imgs/pics/bio1.png" alt="Di Domenico" />
    </BiographyContainer>
  );
}

export default Author;
