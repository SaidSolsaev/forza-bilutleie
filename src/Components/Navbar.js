import React from 'react'
import styled from "styled-components";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Navbar() {
    return (
        <Container>
            <nav className='navbar-container'>
                <div className='container'>
                    <div className='navbar-logo'>
                        <a href='/'>Forza Premium</a>
                    </div>
                    
                    <div className='navbar-items'>
                        <ul className='items-menu'>
                            <li><a href='/'>Hjem</a></li>
                            <li><a href='/våre-biler'>Våre biler</a></li>
                            <li><a href='/kontakt'>Kontakt</a></li>
                            <li><a href='/om-oss'>Om Oss</a></li>
                        </ul>
                    </div>

                    <div className='navbar-icons'>
                        <button className='shopping-bag'>
                            <ShoppingBagIcon />
                        </button>
                    </div>
                </div>
            </nav>
        </Container>
    )
}

const Container = styled.div`
    .navbar-container{
        background: #191919;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .container{
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 50px;
            padding-left: 50px;
            .navbar-logo{
                a{
                    text-decoration: none;
                    font-size: 32px;
                    color: white;
                }
            }
            
            .navbar-items{
                ul{
                    margin: 0;
                    padding: 0;
                    display: flex;
                    li{
                        list-style: none;
                        padding-right: 20px;
                        padding-left: 20px;                        
                        a{
                            text-decoration: none;
                            color: white;
                            transition: all .3s;
                            &:hover{
                                color: #FC2E20;
                            }
                        }
                        
                    }
                }
            }

            .navbar-icons{
                .shopping-bag{
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s;

                    &:hover{
                        color: #FC2E20;
                    }
                }
            }
        }
        
    }
`;
