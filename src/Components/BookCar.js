import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


export default function BookCar() {
    const [modal, setModal] = useState(false);
    
    const [carType, setCarType] = useState("");
    const [pickUp, setPickUp] = useState("");
    const [dropOff, setDropOff] = useState("");
    const [pickTime, setPickTime] = useState("");
    const [dropTime, setDropTime] = useState("");
    const [carImg, setCarImg] = useState("");

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipCode] = useState("");

    const openModal = (e) => {
        e.preventDefault();
        // const errorMsg = document.querySelector(".error-message");
        // if (
        //     pickUp === "" ||
        //     dropOff === "" ||
        //     pickTime === "" ||
        //     dropTime === "" ||
        //     carType === ""
        // ) {
        //   errorMsg.style.display = "flex";
        // } else {
        setModal(!modal);
        const modalDiv = document.querySelector(".booking-modal");
        modalDiv.scroll(0, 0);
        // errorMsg.style.display = "none";
        
    };

    const confirmBooking = (e) => {
        e.preventDefault();
        toast.info(`Resservasjon er sendt`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        // setModal(!modal);
    };

    useEffect(() => {
        if (modal === true) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }, [modal]);

    const handleName = (e) => {
        setName(e.target.value);
    };
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };
    
    const handlePhone = (e) => {
        setPhone(e.target.value);
    };
    
    const handleAge = (e) => {
        setAge(e.target.value);
    };
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    
    const handleAddress = (e) => {
        setAddress(e.target.value);
    };
    
    const handleCity = (e) => {
        setCity(e.target.value);
    };
    
    const handleZip = (e) => {
        setZipCode(e.target.value);
    };
    
    const handlePickTime = (e) => {
        setPickTime(e.target.value);
    };

    let imgUrl;
    switch (carImg) {
        
    }
    
    return (
        <Container>
            <section id='book' className='book-section'>
                <div className='container'>
                    <div className='book-content'>
                        <div className='book-content-box'>
                            <h2>Resserver Bil</h2>
                            
                            <form className='box-form'>
                                <div className='box-form_car-type'>
                                    <label>Velg Bil</label>
                                    <select>
                                        <option>Velg Bilmodell</option>
                                        <option>Lamborghini Urus</option>
                                        <option>Audi RS8</option>
                                        <option>BMW M5</option>
                                        <option>Mercedes-Benz GTs</option>
                                        <option>McLaren</option>
                                    </select>
                                </div>

                                <div className='box-form_car-type'>
                                    <label>Hentested</label>
                                    <select>
                                        <option>Velg Hentested</option>
                                        <option>Oslo</option>
                                    </select>
                                </div>

                                <div className='box-form_car-type'>
                                    <label>Leveringsted</label>
                                    <select>
                                        <option>Velg Leveringsted</option>
                                        <option>Oslo</option>
                                    </select>
                                </div>

                                <div className='box-form_car-time'>
                                    <label htmlFor='picktime'>Fra Dato</label>
                                    <input id='picktime' value={pickTime} onChange={handlePickTime} type='date'></input>
                                </div>

                                <div className='box-form_car-time'>
                                    <label htmlFor='droptime'>Til Dato</label>
                                    <input id='picktime' value={pickTime} onChange={handlePickTime} type='date'></input>
                                </div>

                                <button onClick={openModal} type='submit'>
                                    Søk
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
                <div className='personal-info'>
                    <h4>Personlig Informasjon</h4>
                    <form className='info-form'>
                        <div className='info-form__2col'>
                            <span>
                                <label>Fornavn</label>
                                <input 
                                    value={name}
                                    onChange={handleName}
                                    type='text'
                                    placeholder='Hassan'
                                />
                            </span>

                            <span>
                                <label>Etternavn</label>
                                <input 
                                    value={lastName}
                                    onChange={handleLastName}
                                    type='text'
                                    placeholder='Ali'
                                />
                            </span>

                            <span>
                                <label>Alder</label>
                                <input 
                                    value={age}
                                    onChange={handleAge}
                                    type='number'
                                    placeholder='18'
                                />
                            </span>

                            <span>
                                <label>Tlf</label>
                                <input 
                                    value={phone}
                                    onChange={handlePhone}
                                    type='tel'
                                    placeholder='12345678'
                                />
                            </span>
                        </div>

                        <div className='info-form__1col'>
                            <span>
                                <label>Adresse</label>
                                <input 
                                    value={address}
                                    onChange={handleAddress}
                                    type='text'
                                    placeholder='Havreveien 77'
                                />
                            </span>

                            <span>
                                <label>By</label>
                                <input 
                                    value={city}
                                    onChange={handleCity}
                                    type='text'
                                    placeholder='Oslo'
                                />
                            </span>

                            <span>
                                <label>Postnummer</label>
                                <input 
                                    value={zipcode}
                                    onChange={handleZip}
                                    type='text'
                                    placeholder='0800'
                                />
                            </span>

                            <span>
                                <label>Email</label>
                                <input 
                                    value={email}
                                    onChange={handleEmail}
                                    type='email'
                                    placeholder='Epost@Mail.no'
                                />
                            </span>
                        </div>

                        <div className="reserve-button">
                            <button onClick={confirmBooking}>Reserve Now</button>
                        </div>
                        <ToastContainer position='top-right'/>
                    </form>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .book-section{
        position: relative;
    }

    .book-content{
        margin: 0 auto;
        margin-bottom: 10rem;

        .book-content-box{
            background-color: white;
            width: 100%;
            padding: 3rem;
            box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
            height: auto;
            position: relative;
            z-index: 4;
            color: white;
            border-radius: 5px;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            color: black;

            h2{
                font-size: 25px;
                font-weight: bold;
                margin-bottom: 2.7rem;
            }

            .box-form{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: auto auto auto;
                gap: 2rem;
            }

            .box-form_car-type{
                display: flex;
                flex-direction: column;

                label{
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 1.2rem;
                }

                select{
                    font-size: 1rem;
                    color: #ababab;
                    border: 1px solid #ccd7e6;
                    border-radius: 3px;
                    font-weight: 400;
                    padding: 1.2rem 1.3rem;
                    outline: none;
                }
            }

            .box-form_car-time{
                display: flex;
                flex-direction: column;
                position: relative;

                input{
                    font-size: 1rem;
                    outline: none;
                    color: #878585;
                    padding: 1rem;
                    border: 1px solid #ccd7e6;
                }
            }

            button{
                padding: 1rem;
                height: fit-content;
                align-self: self-end;
                border: none;
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
                background-color: #FC2E20;
                box-shadow: 0 10px 15px rgb(255 83 48 / 35%);
                cursor: pointer;
                transition: all 0.3s;
            
                &:hover {
                    box-shadow: 0 10px 15px rgb(255 83 48 / 55%);
                }
            }
        }
    }

    .booking-modal{
        opacity: 0;
        display: none;
        flex-direction: column;
        position: fixed;
        overflow-x: hidden;
        overflow-y: scroll;
        z-index: 999999999999;
        top: 54%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60rem;
        height: 100vh;
        border: 2px solid white;
        background-color: rgba(255, 255, 255);
        padding-right: 2px;
    }

    .active-modal {
        opacity: 1 !important;
        display: flex !important;
    }

    .personal-info{
        padding: 3rem 3rem;
        background: white;
        display: flex;
        flex-direction: column;
        

        .info-form{
            display: flex;
            flex-direction: column;
            
            h4{
                font-size: 1.8rem;
                text-transform: uppercase;
                margin-bottom: 2rem;
            }
    
            .info-form__1col{
                grid-template-columns: 1fr !important;
            }
    
            .info-form__2col, .info-form__1col{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                padding: 1rem 0;
                
    
                span{
                    display: flex;
                    flex-direction: column;
                    gap: .4rem;
                }
    
                label{
                    font-weight: 500;
                    color: #777777;
                }
    
                input {
                    padding: 10px;
                    background-color: #dbdbdb;
                    color: #555;
                    font-size: 1.5rem;
                    font-weight: 500;
                    outline: none;
                    border: none;
                }
            }
        }
    }
`;
