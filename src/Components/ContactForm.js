import React from 'react'
import styled from 'styled-components'

export default function ContactForm() {
    return (
        <Styles>
            <form className='form'>
                <div className='input-container'>
                    <div className='input-container__inp'>
                        <label>Fult navn</label>
                        <input placeholder='Navn...' type='name'/>
                    </div>

                    <div className='input-container__inp'>
                        <label>Epost</label>
                        <input placeholder='Epost...' type='email'/>
                    </div>

                    <div className='input-container__inp'>
                        <label>Telefon</label>
                        <input placeholder='Telefon...'  type='number'/>
                    </div>

                    <div className='input-container__inp'>
                        <label>Melding</label>
                        <textarea rows="4" cols="50" placeholder='Skriv til oss...'/>
                    </div>
                    
                    <div className='input-container__btn'>
                        <button>Send</button>
                    </div>
                </div>
            </form>
        </Styles>
    )
}

const Styles = styled.div`
    .input-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        // border: 2px solid black;
        width: 100%;
        background: #d3d3d3d3;

        &__inp{
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            width: 100%;
        }

        &__btn{
            padding-top: 2rem;
            button{
                padding: 1rem;
                border-radius: 1em;
                width: 200px;
                background: white;
                border:none;
                text-transform: uppercase;
                font-size: 32px;
                font-weight: 700;
                color: black;

                &:hover{
                    background: green;
                    border: none;
                    color: white;
                }
            }
        }


        label{
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 1rem;
        }

        input{
            padding: 10px;
            // border-radius: 10px;
            border: none;
            border-bottom: 1px solid black;
            outline: none;
            font-size: 22px;
            background: none;
        }

        textarea{
            padding: 10px;
            // border: none;
            // border-top: 1px solid black;
            // border-bottom: 1px solid black;
            outline: none;
            font-size: 22px;
            background: none;
        }
    }

`;
