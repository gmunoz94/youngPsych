import React from 'react';
import { Container } from 'react-bootstrap';

const styles = {
    gerardoImg: {
        height: 'auto',
        width: '100%',
        maxHeight: '450px',
        maxWidth: '337.5px'
    },
    contPad: {
        paddingBottom: '81px'
    }
}

function About() {

    return(
        <div>
            <Container className="my-3" style={styles.contPad}>
                About Test
            </Container>
        </div>
    )
}

export default About;