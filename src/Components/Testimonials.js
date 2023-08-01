import React from 'react'
import styled from 'styled-components';
import TestemonialBox from './TestemonialBox';

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
                            <TestemonialBox name="Said"/>
                            <TestemonialBox name="Said"/>
                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    )
}

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
                font-family: $text-font;
                font-weight: 500;
            }
        
            h2 {
                font-size: 36px;
                font-weight: bold;
                margin-bottom: 1.4rem;
            }
        
            p {
                font-size: 16px;
                font-family: $text-font;
                color: $text-gray;
                line-height: 1.4;
            }
        }
    }
`;