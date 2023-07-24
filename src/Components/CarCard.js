import React from 'react'
import styled from 'styled-components';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';

export default function CarCard({model, car,img, pris}) {
    return (
        <Container>
            <Card style={{width: "300px"}}>
                <CardMedia 
                    component="img"
                    alt="car"
                    height="300"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component="div" >
                        {car}
                    </Typography>
                    <Typography gutterBottom variant='h7'>
                        {model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Denne har en solid 4.4l V8 motor med hele 625hk på alle fire hjul. Dette gjør BMW M5 competition til en rask og behagelig kjøremaskin. Med sportseksos får du et sluttresultat som kombinerer det beste av både sportsbilfølelsen og kjørekomfort!
                    </Typography>
                    
                </CardContent>
                <CardActions style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <Typography variant="h6">
                       Pris pr. døgn {pris} Kr
                    </Typography>
                    <button className='bookBtn'>
                        Book Nå
                    </button>
                </CardActions>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    .bookBtn{
        margin: 10px;
        background: #FC2E20;
        border: 1px solid #FC2E20;
        width: 100%;
        height: 50px;
        font-size: 28px;
        font-weight: bold;
        transition: background-color .5s ease-in-out;
        
        &:hover{
            background: #000000;
            color: #FC2E20;
        }
    }
`;
