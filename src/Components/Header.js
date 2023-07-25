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
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <CarouselItem interval={1000}>
                    <img src={b1} alt='bmw'/>
                </CarouselItem>

                <CarouselItem interval={1000}>
                    <img src={b2} alt='bmw'/>
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

`;