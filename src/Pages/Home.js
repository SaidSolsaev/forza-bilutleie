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
                {/* <div className="card-container">
                    <div className="cards">
                        <h1>Våre Biler</h1>
                        <Grid container spacing={2}>
                            <Grid item>
                                <CarCard car="BMW M5" img={bmw} pris="5990" model={2019}/>
                            </Grid>
                            <Grid item>
                                <CarCard car="MERCEDES-BENZ GT's" img={mercgt} pris="5990" model={2019}/>
                            </Grid>
                            <Grid item>
                                <CarCard car="MCLAREN" img={mclaren} pris="5990" model={2019}/>
                            </Grid>
                            <Grid item>
                                <CarCard car="LAMBORGHINI URUS" img={urus} pris="5990" model={2019}/>
                            </Grid>
                            <Grid item>
                                <CarCard car="AUDI R8" img={r8} pris="5990" model={2019}/>
                            </Grid>
                        </Grid>
                    </div>
                </div> */}

                
            </Container>
            <Banner />
            <Testimonials />
        </Styles>
    );
}

const Styles = styled.div`
    background-color: #d3d3d3;

    
    .card-container{
        display: flex;

    }

    .register-booking{
        margin-top: 100px;
    }
`;