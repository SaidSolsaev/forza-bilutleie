import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import ContactForm from '../Components/ContactForm';


export default function Contact() {
    return (
        <Styles>
            <Container>
                <div>
                    <ContactForm />
                </div>
            </Container>
        </Styles>
    )
}

const Styles = styled.div`

`;