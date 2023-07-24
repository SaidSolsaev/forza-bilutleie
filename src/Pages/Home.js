import {Container} from "react-bootstrap"
import React from 'react'
import CarCard from "../Components/CarCard"
import bmw from "../Images/bmw.jpg"
import { Grid } from "@mui/material"
import styled from "styled-components"
import mercgt from "../Images/mercgt.jpg"
import mclaren from "../Images/mclaren.jpg"
import r8 from "../Images/r8.jpg"
import urus from "../Images/urus.jpg"


export default function Home() {
    return (
        <Styles>
            <Container>
                <div className="card-container">
                    <div className="cards">
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
    margin-top: 50px;
      
    .card-container{
        display: flex;
        
        .cards{
        }

    }
`;