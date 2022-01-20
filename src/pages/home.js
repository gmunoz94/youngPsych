import React from 'react';
import { Container } from 'react-bootstrap';
import homeImg from '../assets/nature1.jpg'

const styles = {
    gerardoImg: {
        height: 'auto',
        width: '100%',
        maxHeight: '450px',
        maxWidth: '337.5px'
    },
    contPad: {
        paddingBottom: '81px'
    },
    homeLink: {
        textDecoration: 'underline white'
    },
    homeImg: {
        width: '100%',
        height: 'auto'
    }
}

function Home() {

    return(
        <div>
{/* 
            <img src={homeImg} style={styles.homeImg} alt='mountain reflected over lake'></img> */}
            <Container className="my-3" style={styles.contPad}>
                Home Test
            </Container>
        </div>
    )
}

export default Home;