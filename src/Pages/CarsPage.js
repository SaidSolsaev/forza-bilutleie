import React from 'react'
import CarCard from "../Components/CarCard"
import { Grid } from "@mui/material"
import bmw from "../Images/bmw.jpg"
import mercgt from "../Images/mercgt.jpg"
import mclaren from "../Images/mclaren.jpg"
import r8 from "../Images/r8.jpg"
import urus from "../Images/urus.jpg"
import styled from "styled-components"
import { Container } from "react-bootstrap"

export default function CarPage() {
    
    
    return (
        <Styles>
            <Container>
                <div className="card-container">
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
                </div>
            </Container>
        </Styles>
    );
}

const Styles = styled.div`

    background-color: #d3d3d3;
    
    .cards{
        margin-top: 10rem;
        margin-bottom: 10rem;
        
        h1{
            text-align: center;
            margin-bottom: 5rem;
            font-weight: 700;
        }
    }

    .card-container{
        display: flex;
    }

`;
