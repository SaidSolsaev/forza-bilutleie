import React from 'react'
import styled from 'styled-components'

export default function TestemonialBox({name, img, text}) {
    return (
        <Styles>    
            <div className='all-testimonials__box'>
                <p>
                    {text}
                    "We rented a car from this website and had an amazing
                    experience! The booking was easy and the rental rates were
                    very affordable. "
                </p>

                <div className='all-testimonials__box__name'>
                    <div className='all-testimonials__box__name__profile'>
                        <img alt='user_pic'/>
                        <span>
                            <h4>{name}</h4>
                            <p>Kunde</p>
                        </span>
                    </div>
                </div>
            </div>
            
        </Styles>
    )
}

const Styles = styled.div`

.all-testimonials{
    &__box {
        background-color: white;
        box-shadow: 0 20px 40px 0 rgb(0 0 0 / 8%);
        width: 54rem;
        // padding: 5.5rem;
        position: relative;
    
        @media (max-width: 1000px) {
            padding: 5rem 3rem;
        }
    
        p {
            font-size: 16px;
            font-weight: 500;
        }
    
        &__name {
            display: flex;
    
            &__profile {
                display: flex;
                gap: 2rem;
                align-items: center;
                margin-top: 3rem;
    
                img {
                    width: 7rem;
                    height: 7rem;
                    border-radius: 50%;
                }
    
                h4 {
                    font-size: 1.8rem;
                }
    
                p {
                  font-size: $p-size;
                    font-family: $text-font;
                    font-weight: 400;
                }
            }
        }
      
    }
}


`;