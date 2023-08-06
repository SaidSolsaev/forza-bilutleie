import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import ContactForm from '../Components/ContactForm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Contact() {
    return (
        <Styles>
            <Container>
                <div className='contact-container'>
                    <div className='contact-info'>
                        <div className='contact-info__div'>
                            <span><LocationOnIcon fontSize=''/></span>
                            <h3>Lokasjon</h3>
                            <p>Adresse 12, 0554 Oslo</p>
                        </div>

                        <div className='contact-info__div'>
                            <span><LocalPhoneIcon fontSize='' /></span>
                            <h3>Telefon</h3>
                            <p>123 12 123</p>
                        </div>

                        <div className='contact-info__div'>
                            <span><EmailIcon fontSize=''/></span>
                            <h3>Epost</h3>
                            <p>Forzapremium@mail.no</p>
                        </div>

                        <div className='contact-info__div'>
                            <span><AccessTimeIcon fontSize=''/></span>
                            <h3>24/7</h3>
                            <p>Man-Søn</p>
                        </div>
                    </div>
                    
                    <div className='contact-form'>
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </Styles>
    )
}

const Styles = styled.div`
    .contact-container{
        padding-bottom: 20rem;
    }
    .contact-info{
        display: flex;
        justify-content: space-around;
        padding-top: 10rem;
        padding-bottom: 10rem;

        &__div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-right: 1px solid black;
            width: 100%;

            h3{
                margin-top: 1.5rem;
                margin-bottom: 1rem;
            }

            span{
                font-size: 42px;
                color: red;
            }
        }

        &__div:nth-last-child(1){
            border: none;
        }
    }

`;