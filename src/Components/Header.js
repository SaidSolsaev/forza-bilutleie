import React, {useState} from 'react'
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import { CarouselItem } from 'react-bootstrap/esm';
import b1 from "../Images/back1.jpg"
import b2 from "../Images/back2.jpg"
import urus from "../Images/urus.jpg"

export default function Header() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <Container>
            <Carousel fade activeIndex={index} onSelect={handleSelect} prevIcon nextIcon>
                <CarouselItem interval={1000}>
                    <img src={b1} alt='bmw'/>
                    <Carousel.Caption>
                        <div className='btn-container'>
                            <a href='#book'><button className='book-btn'>Book</button></a>
                            <button className='cars-btn'>Våre Biler</button>
                        </div>
                    </Carousel.Caption>
                </CarouselItem>

                <CarouselItem interval={1000}>
                    <img src={b2} alt='bmw'/>
                    <Carousel.Caption>
                        <div className='btn-container'>
                            <a href='#book'><button className='book-btn'>Book</button></a>
                            <button className='cars-btn'>Våre Biler</button>
                        </div>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </Container>
    );
}


const Container = styled.div`
    img{
        max-width: 100%;
        height: auto;
    }

    .carousel-caption{
        position: absolute;
        top:80%;
        left: 7%;
        
        .btn-container{
            display: flex;

            button{
                padding: 20px;
                width: 200px;
                margin-right: 5px;
                margin-left: 5px;
                font-size: 24px;
                font-weight: bold;
                border: none;
                transition: background-color .3s ease-in-out;
                color: white;
                border-radius: 5px;
            }
    
            .book-btn{
                background: #FC2E20;
                &:hover{
                    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.5);
                }
            }

            .cars-btn{
                background: #000000;

                &:hover{
                    background: #fff;
                    border: 3px solid black;
                    color: black;
                }
            }
        }
    }

`;