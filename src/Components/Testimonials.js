import React, { useState } from 'react'
import styled from 'styled-components';
import TestemonialBox from './TestemonialBox';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Testimonials() {

    return (
        <Styles>
            <section className='testimonial-section'>
                <div className='container'>
                    <div className='testimonial-content'>
                        <div className='testimonial-content__title'>
                            <h4>Våre kunder forteller</h4>
                            <h2>Annmeldelser</h2>
                            <p>
                                Discover the positive impact we've made on the our clients by
                                reading through their testimonials. Our clients have experienced
                                our service and results, and they're eager to share their
                                positive experiences with you. 
                            </p>
                        </div>
                        
                        <div className='all-testimonials'>
                            <Carousel showThumbs={false}>
                                <div className='carousel-box'>
                                    <TestemonialBox name="Lars Olsen"/>
                                    <TestemonialBox name="Lars Olsen"/>
                                </div>

                                <div className='carousel-box'>
                                    <TestemonialBox name="Lars Olsen"/>
                                    <TestemonialBox name="Lars Olsen"/>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    );
};

const Styles = styled.div`
    .testimonial-section{
        padding: 10rem 0;
    }

    .testimonial-content{
        display: flex;
        flex-direction: column;

        &__title {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            text-align: center;
            max-width: 70rem;
            margin-bottom: 5rem;
        
            h4 {
                font-size: 28px;
                font-weight: 500;
            }
        
            h2 {
                font-size: 36px;
                font-weight: bold;
                margin-bottom: 1.4rem;
            }
        
            p {
                font-size: 16px; 
                line-height: 1.4;
            }
        }

        .all-testimonials{
            // display: flex;
            gap: 3rem;
            
        }

        .testimonial-content__dots{
            margin-top: 3rem;
            
            &__icons{
                display: flex;
                justify-content: center;
                gap: 2rem;
                
                button{
                    border: none;
                    background: none;
                }

                .active-dot{
                    color: red;
                }
            }
        }
    }

    

    .carousel-box{
        display: flex;
        gap: 3rem;
    }

    
`;