import React from 'react'
import styled from 'styled-components'
import profile from "../Images/profile.png"
import StarIcon from '@mui/icons-material/Star';

export default function TestemonialBox({name, img, text}) {
    return (
        <Styles>    
            <div className='all-testimonials__box'>
                <p>
                    {text}
                    "We rented a car from this website and had an amazing
                    experience! The booking was easy and the rental rates were
                    very affordable."
                </p>

                <div className='all-testimonials__box__name'>
                    <div className='all-testimonials__box__name__profile'>
                        <img src={profile} alt='user_pic'/>
                        <span>
                            <h4>{name}</h4>
                            <p>Kunde</p>
                        </span>
                    </div>
                    <div className='all-testimonials__box__name__stars'>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>
                </div>
            </div>
        </Styles>
    );
}

const Styles = styled.div`

.all-testimonials{
    &__box {
        background-color: white;
        box-shadow: 0 20px 40px 0 rgb(0 0 0 / 8%);
        padding: 2rem;
        position: relative;
    
        @media (max-width: 1000px) {
            padding: 5rem 3rem;
        }
    
        p {
            font-size: 22px;
            font-weight: 500;
        }
    
        &__name {
            display: flex;
    
            &__profile {
                display: flex;
                gap: 1rem;
                width: 60%;
                align-items: center;
                margin-top: 1rem;
    
                img {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                }
    
                h4 {
                    font-size: 1.8rem;
                }
    
                p {
                    font-size: 16px;
                    font-weight: 400;
                    text-align: left;
                }
            }

            &__stars{
                width: 40%;
                display: flex;
                align-items: end;
                justify-content: end;
            }
        }
      
    }
}


`;