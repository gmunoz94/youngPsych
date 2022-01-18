import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

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
}

function Home() {

    return(
        <div>
            <Container className="my-3" style={styles.contPad}>
                Home Test
            </Container>
        </div>
    )
}

export default Home;