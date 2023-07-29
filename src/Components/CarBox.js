import { useState } from "react";
import styled from "styled-components";



function CarBox({ data, carID }) {
    const [carLoad, setCarLoad] = useState(true);
    
    return (
        <Container>
            {data[carID].map((car, id) => (
                <div key={id} className="box-cars">
                
                    <div className="pick-car">
                        {carLoad && <span className="loader"></span>}
                        <img
                            style={{ display: carLoad ? "none" : "block" }}
                            src={car.img}
                            alt="car_img"
                            onLoad={() => setCarLoad(false)}
                        />
                    </div>
                    
                    <div className="pick-description">
                        <div className="price">
                            <span>{car.price}Kr</span>/ 24 timer
                        </div>
                        
                        <div className="table">
                            <div className="col">
                                <span>Merke</span>
                                <span>{car.model}</span>
                            </div>

                            <div className="col">
                                <span>Modell</span>
                                <span>{car.mark}</span>
                            </div>

                            <div className="col">
                                <span>Årsmodell</span>
                                <span>{car.year}</span>
                            </div>

                            <div className="col">
                                <span>Seter</span>
                                <span>{car.doors}</span>
                            </div>

                            <div className="col">
                                <span>HK</span>
                                <span>{car.horses}</span>
                            </div>

                            <div className="col">
                                <span>NM</span>
                                <span>{car.nm}</span>
                            </div>

                            <div className="col">
                                <span>Drivstoff</span>
                                <span>{car.fuel}</span>
                            </div>
                        </div>
                        
                        <a className="cta-btn" href="#book">
                            Resserver Nå
                        </a>
                    </div>
                </div>
            ))}
        </Container>
    );
}

export default CarBox;

const Container = styled.div`

    .box-cars{
        gap: 2rem;
        display: flex;
        justify-content: space-between;
    }

    .pick-car{
        width: 50rem;
        position: relative;

        img{
            width: 100%;
            
        }
    }
    
    .pick-description{
        width: 20rem;
        heihgt: 200px;
        
        .price{
            width: 100%;
            background-color: #FC2E20;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 1rem;
            color: white;
    
            span{
                font-size: 2rem;
                font-weight: 700;
            }
        }
    }
    

    .table{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        font-size: 1.2rem;
    }

    .col{
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        grid-template-rows: auto;
        padding: 0.9rem 0.5rem;
        border-bottom: 2px solid #706f7b;
        border-right: 2px solid #706f7b;
        border-left: 2px solid #706f7b;

        span:nth-child(1) {
            border-right: 2px solid #706f7b;
        }
    }

    .cta-btn {
        font-size: 2rem;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 600;
        color: white;
        background-color: red;
        padding: 1rem 1rem;
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 1.4rem;
        transition: all 0.3s;
        box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.5);
      
        &:hover {
            background-color: #e9381d;
        }
    }

    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #00000042;
        border-bottom-color: #ff3d00;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 40%;
        right: 43%;
      }
      
    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`;