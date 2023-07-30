import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import toast, { Toaster } from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';
import bmw from "../Images/bmw.jpg"
import mercgt from "../Images/mercgt.jpg"
import mclaren from "../Images/mclaren.jpg"
import r8 from "../Images/r8.jpg"
import urus from "../Images/urus.jpg"

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
    const [pickHour, setPickHour] = useState("");
    const [dropHour, setDropHour] = useState("");

    const notifyError = () => {
        toast.error("Fyll inn alle felt", {
            duration: 2000,
            position: "top-center",
            style: {background: "black", color: "white", fontSize: "22px"}
        });
    }

    const openModal = (e) => {
        e.preventDefault();
        if (
            pickUp === "" ||
            dropOff === "" ||
            pickTime === "" ||
            dropTime === "" ||
            carType === ""
        ) {
            notifyError();
        } else {
            setModal(!modal);
            const modalDiv = document.querySelector(".booking-modal");
            modalDiv.scroll(0, 0);
        }
    };

    const notifySuccess = () => {
        toast.success(`Resservasjonen er sendt. Takk ${name + " " + lastName}`,{
            duration: 2000,
            position: "top-center",
            style: {background: "black", color: "white", fontSize: "22px"}
        })
    }

    const confirmBooking = (e) => {
        e.preventDefault();

        if (
            name === "" ||
            lastName === "" ||
            phone === "" ||
            age === "" ||
            email === "" ||
            address === "" ||
            city === "" ||
            zipcode === "" ||
            pickHour === "" ||
            dropHour === ""
        ){
            notifyError();
        } else{
            notifySuccess();
            setModal(!modal);
            console.log(name,
                lastName,
                phone,
                age,
                email,
                address,
                city,
                zipcode,
                pickHour,
                dropHour)
        }

    };

    const closeModal = (e) =>{
        e.preventDefault();
        setModal(false);
    }

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

    const handleCar = (e) => {
        setCarType(e.target.value);
        setCarImg(e.target.value);
    };

    const handlePick = (e) => {
        setPickUp(e.target.value);
    };

    const handleDrop = (e) => {
    setDropOff(e.target.value);
    };

    const handleDropTime = (e) => {
        setDropTime(e.target.value);
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

    const handlePickHour = (e) => {
        setPickHour(e.target.value);
    };

    const handleDropHour = (e) => {
        setDropHour(e.target.value);
    };

    console.log(dropHour)
    console.log(pickHour)

    let imgUrl;
    switch (carImg) {
        case "BMW M5":
            imgUrl = bmw;
            break;
        case "Audi RS8":
            imgUrl = r8;
            break;
        case "Mercedes-Benz GTs":
            imgUrl = mercgt;
            break;
        case "Lamborghini Urus":
            imgUrl = urus
            break;
        case "McLaren":
            imgUrl = mclaren
            break;
        default:
            imgUrl = "";
    }
    
    return (
        <Container>
            <section id='book' className='book-section'>
                <div className={`modal-overlay ${modal ? "active-modal" : ""}`} onClick={openModal}></div>
                <div className='container'>
                    <Toaster />
                    <div className='book-content'>
                        <div className='book-content-box'>
                            <h2>Resserver Bil</h2>
                            
                            <form className='box-form'>
                                <div className='box-form_car-type'>
                                    <label>Velg Bil</label>
                                    <select value={carType} onChange={handleCar}>
                                        <option value="">Velg Bilmodell</option>
                                        <option value="Lamborghini Urus">Lamborghini Urus</option>
                                        <option value="Audi RS8">Audi RS8</option>
                                        <option value="BMW M5">BMW M5</option>
                                        <option value="Mercedes-Benz GTs">Mercedes-Benz GTs</option>
                                        <option value="McLaren">McLaren</option>
                                    </select>
                                </div>

                                <div className='box-form_car-type'>
                                    <label>Hentested</label>
                                    <select value={pickUp} onChange={handlePick}>
                                        <option value="">Velg Hentested</option>
                                        <option value="Oslo">Oslo</option>
                                    </select>
                                </div>

                                <div className='box-form_car-type'>
                                    <label>Leveringsted</label>
                                    <select value={dropOff} onChange={handleDrop}>
                                        <option value="">Velg Leveringsted</option>
                                        <option value="Oslo">Oslo</option>
                                    </select>
                                </div>

                                <div className='box-form_car-time'>
                                    <label htmlFor='picktime'>Fra Dato</label>
                                    <input id='picktime' value={pickTime} onChange={handlePickTime} type='date'></input>
                                </div>

                                <div className='box-form_car-time'>
                                    <label htmlFor='droptime'>Til Dato</label>
                                    <input id='picktime' value={dropTime} onChange={handleDropTime} type='date'></input>
                                </div>
                                
                                <button onClick={openModal} type='submit'>Søk</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            {/*MODAL*/}
            <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
                <div className='booking-modal__title'>
                    <h2>Fullfør Bestillingen</h2>
                    <i onClick={closeModal}><CloseIcon /></i>
                </div>

                <div className='booking-modal__message'>
                    <h4>Når du fullfører denne bestillingen</h4>
                    <p>En epost om bekreftelse om forespørselen din</p>
                </div>

                <div className='booking-modal__car-info'>
                    <div className='dates-div'>
                        <div className='booking-modal__car-info__dates'>
                            <h5>Sted & Dato</h5>
                            <span>
                                <div>
                                    <h6>Tidspunkt for Pickup</h6>
                                    <p>{pickTime} /{" "}
                                        <input value={pickHour} type='time' required className='input-time' step="3600" onChange={handlePickHour}/>
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className='booking-modal__car-info__dates'>
                            <span>
                                <div>
                                    <h6>Tidspunkt for Dropoff</h6>
                                    <p>{dropTime} /{" "}
                                        <input value={dropHour} type='time' className='input-time' step="3600" onChange={handleDropHour}/>
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className='booking-modal__car-info__dates'>
                            <span>
                                <div>
                                    <h6>Hentested</h6>
                                    <p>{pickUp}</p>
                                </div>
                            </span>
                        </div>

                        <div className='booking-modal__car-info__dates'>
                            <span>
                                <div>
                                    <h6>Leveringsted</h6>
                                    <p>{dropOff}</p>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className='booking-modal__car-info__model'>
                        <h5>
                            <span>Bil -</span> {carType}
                        </h5>
                        {imgUrl && <img src={imgUrl} alt={carType} />}
                    </div>
                </div>
                
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
                            <div className='info-form__2col'>
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
                            </div>

                            <span>
                                <label>Email</label>
                                <input 
                                    value={email}
                                    onChange={handleEmail}
                                    type='email'
                                    required
                                    placeholder='Epost@Mail.no'
                                />
                            </span>
                        </div>
                    </form>
                </div>
                
                <div className="button-section">
                    <button onClick={closeModal}>Avbryt</button>
                    <button onClick={confirmBooking}>Send Forespørsel</button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`

    .book-section{
        position: relative;
    }

    .toast{
        background: red;
        display: flex;
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
                    color: black;
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
                    color: black;
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
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 90vh;
        background-color: rgba(255, 255, 255);
        // padding-right: 2px;

        &__title{
            display: flex;
            justify-content: space-between;
            padding: 1rem 1.5rem;
            background-color: red;
            color: white;
            align-items: center;

            h2{
                font-size: 36px;
                font-weight: bold;
                text-transform: uppercase;
            }

            i{
                font-size: 36px;
                color: rgba(255,255,255,0.919);
                cursor: pointer;
                transition: all .2;

                &:hover{
                    color: black;
                }
            }
        }

        &__message{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 2rem 3rem;
            background-color: #ffeae6;

            h4{
                font-size: 30px;
                font-weight: 700;
            }

            p{
                font-size: 22px;
                color: #777777;
                font-weight: 500;
                line-height: 1.6;
            }
        }

        &__car-info{
            padding: 3rem 3rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            border-bottom: 1px solid #7777779f;

            @media (max-width: 650px){
                grid-template-columns: 1fr;
                text-align:center;
            }

            &__dates{
                display: flex;
                flex-direction: column;
                gap: 2rem;

                h5{
                    font-size: 1.8rem;
                    color: red;
                    font-weight: bold;
                }

                h6{
                    font-size: 1.4rem;
                    margin-bottom: .2rem;
                }

                p{
                    font-size: 1.2rem;
                    color: #777777;
                    .input-time {
                        text-align: center;
                        width: 5rem;
                        font-size: 16px;
                        cursor: pointer;
                    }
                }

                span{
                    display: flex;
                    gap: 1rem;
                }
            }

            &__model{
                display: flex;
                flex-direction: column;
                gap: 3rem;
    
                @media (max-width: 650px){
                    margin-top: 3.5rem;
                }
    
                h5{
                    font-size: 1.8rem;
                    color: red;
                    font-weight: bold;
                }

                img{
                    width: 100%;
                    height: auto;
                }
            }
        }

    }

    .modal-overlay{
        opacity: 0;
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, .3);
        z-index: 999999999;
        top: 0;
        right: 0;
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
        
        h4{
            font-size: 1.5rem;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 2rem;
            color: red;
        }
        .info-form{
            display: flex;
            flex-direction: column;
            
    
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
    .button-section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        width: 100%;
        background-color: #dbdbdb;
        height: 200px;
        
        button{
            padding: 20px;
            background: none;
            border: 2px solid red;
            margin: 40px 20px 40px 20px;
            font-size: 22px;
            font-weight: bold;
            color: black;
            transition: ease-in-out .3s;
            text-transform: uppercase;

            &:hover{
                background: red;
                color: white;
            }
        }
    }
`;
