import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aPic from '../assets/Alisa_Young1.jpg'

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
                <Row className='my-5'>
                    <Col>
                        <img src={aPic} alt='Alisa Young Headshot'/>
                    </Col>
                    <Col>
                        <h4>About Me</h4>
                        <p className='text-start'>Alisa Zinsmeyer Young, M.A. is a licensed professional counselor.  She has been working for South Texas Neuropsychology since 2004.  She received her undergraduate degree from Baylor University in Communication Disorders and her Graduate Degree from The University of Texas of San Antonio in Counseling.  She became well versed in rehabilitation, neurological disorders, and brain injuries during her internship at HealthSouth Rehabilitation Institute of San Antonio (RIOSA), where she began providing counseling and psychometric services.  She has run traumatic brain injury and stroke counseling as well as led support groups at area hospitals.  Alisa has also participated as a sub-investigator in clinical trials exploring the effects of interventions on various cognitive and neurological disorders.  Alisa is married and has two children.</p>
                        <p className='text-start'>Since 2007, I've been working as a Licensed Professional Counselor who specializes in helping people cope with their issues and concerns. Many clients merely need assistance in gaining insight, direction, self-compassion and developing practical coping skills to manage stress. In this journey, I strive to walk alongside clients with mercy and wisdom to help achieve self-actualization and goals.</p>
                        <p className='text-start'>I routinely work with individuals who have been newly diagnosed with various illnesses. A goal for them has been to work through the mental process of being diagnosed and to be emotionally well equipped for the future. I also aid people with common life stressors-work, social anxiety, family issues, relational problems, attentional and cognitive concerns.</p>
                        <p className='text-start'>At South Texas Counseling and Consulting, P.A. our goal is to aid you in adjusting, adapting and overcoming with compassion and warmth.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;