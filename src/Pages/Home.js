import {Container} from "react-bootstrap"
import React from 'react'
import styled from "styled-components"
import Header from "../Components/Header"
import BookCar from "../Components/BookCar"
import PickCar from "../Components/PickCar"
import PlanTrip from "../Components/PlanTrip"
import Banner from "../Components/Banner"
import Testimonials from "../Components/Testimonials"


export default function Home() {
    return (
        <Styles>
            <Header />
            <Container style={{marginTop: "100px"}}>
                <BookCar />
                <PlanTrip />
                <PickCar />
            </Container>
            <Banner />
            <Testimonials />
        </Styles>
    );
}

const Styles = styled.div`
    background-color: #d3d3d3;

    .register-booking{
        margin-top: 100px;
    }
`;