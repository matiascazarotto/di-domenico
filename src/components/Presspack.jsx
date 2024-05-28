import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

const SectionContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#121212',
    backgroundImage: 'url(/imgs/prasspack-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
    textAlign: 'center',
    position: 'relative',
    padding: '20px',
    '@media (min-width: 900px)': {
        flexDirection: 'row',
        padding: '40px 250px',
        minHeight: '100vh',
    },
});

const VerticalTextContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
    position: 'relative',
    '@media (min-width: 900px)': {
        marginRight: '50px',
    },
});

const VerticalText = styled(Typography)({
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    fontFamily: 'Archivo Black, sans-serif',
    margin: '20px',
    fontSize: '26px',
    color: '#ffffff',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
    '@media (min-width: 900px)': {
        fontSize: '46px',
    },
});

const ContactInfoContainer = styled(Box)({
    flex: '1',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
    marginBottom: '50px'
});

const SocialText = styled(Typography)({
    color: '#ffffff',
    minWidth: '150px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '16px',
    marginTop: '10px',
    textAlign: 'center',
    '@media (min-width: 900px)': {
        fontSize: '18px',
    },
    '& a': {
        textDecoration: 'none', 
        color: 'inherit', 
    },
});

const VerticalLine = styled(Box)({
    display: 'none',
    '@media (min-width: 900px)': {
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: 'calc(50% + 100px)',
        width: '5px',
        height: '200px',
        backgroundColor: '#ffffff',
        transform: 'translateY(-50%)',
        zIndex: '1',
    },
});

const LinkContainer = styled('a')(({ isIntersecting }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.9s ease',
    textDecoration: 'none',
    transform: isIntersecting ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%)',
    '&:hover': {
        transform: isIntersecting ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1.5)',
    },
    '@media (min-width: 900px)': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: isIntersecting ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%)',
    },
    '@media (max-width: 600px)': {
        transform: isIntersecting ? 'scale(1.3)' : 'scale(1)',
    },
}));

const Image = styled('img')({
    width: '150px',
    height: 'auto',
    '@media (min-width: 900px)': {
        width: '200px',
    },
});

function Presspack() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5, // Change this threshold as needed
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <SectionContainer>
            <VerticalTextContainer>
                <VerticalText variant="h2">PRESS PACK</VerticalText>
                <VerticalLine />
            </VerticalTextContainer>
            <ContactInfoContainer ref={containerRef}>
                <LinkContainer href="https://soundcloud.com/user-356514522" target="_blank" isIntersecting={isIntersecting}>
                    <Image src="imgs/logo-gdrive.png" alt="Press Pack Google Drive" />
                    <SocialText>GOOGLE DRIVE</SocialText>
                </LinkContainer>
            </ContactInfoContainer> 
        </SectionContainer>
    );
}

export default Presspack;
