import React, { useState } from 'react'
import styled from 'styled-components';
import CarBox from './CarBox';
import {CAR_DATA} from "../data/CarData.js"

export default function PickCar() {
    const [active, setActive] = useState("FirstCar");
    const [colorBtn, setColorBtn] = useState("btn1");
    
    const btnID = (id) => {
        setColorBtn(colorBtn === id ? "" : id);
    };

    const coloringBtn = (id) => {
        return colorBtn === id ? "colored-button" : "";
    }

    return (
        <Container>
            <section className='pick-section'>
                <div className='container'>
                    <div className='pick-container'>
                        <div className='title'>
                            <h3>Bilmodellene våres</h3>
                            <h2>Velg din Drømmebil</h2>
                            <p>
                                Velg den bilen du alltid har drømt om å kjøre og ta den med
                                på din neste kjøretur
                            </p>
                        </div>

                        <div className='car-content'>
                            <div className='pick-box'>
                                <button 
                                    className={`${coloringBtn("btn1")}`} 
                                    onClick={() => {setActive("FirstCar"); btnID("btn1")}}>
                                        Lamborghini Urus
                                </button>

                                <button 
                                    className={`${coloringBtn("btn2")}`} 
                                    onClick={() => {setActive("SecondCar"); btnID("btn2")}}>
                                        Audi RS8
                                </button>

                                <button 
                                    className={`${coloringBtn("btn3")}`} 
                                    onClick={() => {setActive("ThirdCar"); btnID("btn3")}}>
                                        BMW M5
                                </button>

                                <button 
                                    className={`${coloringBtn("btn4")}`} 
                                    onClick={() => {setActive("FourthCar"); btnID("btn4")}}>
                                        McLaren
                                </button>

                                <button 
                                    className={`${coloringBtn("btn5")}`} 
                                    onClick={() => {setActive("FifthCar"); btnID("btn5")}}>
                                        Mercedes-Benz GTs
                                </button>
                            </div>

                            {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
                            {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
                            {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
                            {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
                            {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

const Container = styled.div`
    .container{
        .pick-container{
            display: flex;
            flex-direction: column;

            .title{
                margin: 0 auto;
                align-self: center;
                text-align: center;
                margin-bottom: 5rem;
                max-width: 50rem;

                p {
                    line-height: 1.5;
                }
              
                h3 {
                    font-size: $h3-size;
                    font-weight: 500;
                }
                
                h2 {
                    font-size: 42px;
                    font-weight: bold;
                    margin: 0.5rem 0 1rem 0;
                }
            }

            .car-content{
                display: flex;
                justify-content: space-between;
                gap: 1rem;

                .pick-box{
                    display:flex;
                    flex-direction: column;
                    gap: 1rem;

                    button{
                        font-size: 1.5rem;
                        font-weight: 600;
                        border: none;
                        width: 300px;
                        cursor: pointer;
                        padding: 1.5rem 2.5rem;
                        transition: all 0.2s;
                        text-align: left;

                        &:hover {
                            background-color: red;
                            color: white;
                        }
                    }
                }
            }
        }
    }

    .colored-button{
        background-color: red;
        color: white;
    }
`;
