import  React  from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BackgroundSlider from 'react-background-slider'

const CarwelLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
        height: '80vh',
        minHeight: 1000,
        maxHeight: 1300,
    },
}));


const images = [
    'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  ];
function HomeLayout(props) {
    const { children } = props;
  
    return (
        <CarwelLayoutRoot >
            <Container
                sx={{

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                {children}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'common.black',
                        opacity: 0.5,
                        zIndex: -1,
                    }}
                />
                <BackgroundSlider
                    images={images}
                    duration={5} 
                    transition={2} 
                    
                    />
              
     
            </Container>
        </CarwelLayoutRoot>
    )
}


export default HomeLayout;