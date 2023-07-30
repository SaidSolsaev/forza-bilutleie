import React from 'react'
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';


export default function Footer() {
    
  return (

    <Container>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li><span>Premium BIL</span> Utleie</li>
                
              <li>
                
                Vi tilbyr et utvalg med lukseriøse og sportslige kjøretøy.
                Ta med deg en av våre biler på veien
              </li>
                
              <li>
                <a href="tel:123456789">
                  <span><LocalPhoneIcon /></span>&nbsp; +47 112 33 445
                </a>
              </li>

              <li>
                <a href="mailto: forzapremium@mail.com">
                  <span><EmailIcon /></span>&nbsp; forzapremium@mail.com
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/forza__premium/">
                  <span><InstagramIcon /></span>&nbsp; forza__premium
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/forza__premium/">
                  <span><FacebookIcon /></span>&nbsp; ForzaPremium
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Åpningstider</li>
              <li>Man - Fre: 09:00 - 21:00</li>
              <li>Lør: 09:00 - 21:00</li>
              <li>Søn: 09:00 - 21:00</li>
            </ul>

            <ul className="footer-content__2">
              <li>Abonner</li>
                
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
                
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
                
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
          
          <div className='made-by'>
            <span><CopyrightIcon /></span>&nbsp;This website is made by&nbsp;
            <a href='https://www.linkedin.com/in/said-solsaev/'>Said Solsaev</a>
          </div>
        </div>
      </footer>
    </Container>
  );
}

const Container = styled.div`

  .made-by{
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    a{
      color: red;
      text-decoration: none;
    }
  }

  footer {
    background: #191919;
    padding: 5rem 0;
  } 
  
  .footer-content {
    display: grid;
    color: white;
    grid-template-columns: 27fr 21fr 21fr;
    gap: 8rem;
    justify-content: center;
    text-align: left;
    
  
    @media (max-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }
  
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  
    &__1 {
      list-style: none;
  
      @media (max-width: 650px) {
        text-align: center;
      }
  
      li {
        a {
          text-decoration: none;
          color: white;
          transition: all 0.2s;
  
          &:hover {
            color: red;
          }
        }
  
        &:nth-child(1) {
          font-size: 24px;
          margin-bottom: 1.5rem;
  
          span {
            font-weight: 700;
          }
        }
  
        &:nth-child(2) {
          font-size: 16px;
          color: $text-gray;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
  
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6) {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 1rem;
        }
      }
    }
  
    &__2 {
      list-style: none;
  
      @media (max-width: 650px) {
        text-align: center;
      }
  
      a {
        text-decoration: none;
        color: $text-black;
        transition: all 0.2s;
  
        &:hover {
          color: $text-orange;
        }
      }
  
      li {
        font-size: $p-size;
        margin-bottom: 1rem;
  
        &:nth-child(1) {
          font-size: 24px;
          font-weight: 700;
          text-transform: uppercase;
          font-family: $titles-font;
          cursor: auto;
        }
      }
  
      input {
        font-family: $text-font;
        font-size: 14px;
        font-weight: 400;
        line-height: 26px;
        background-color: #ececec;
        border-width: 1px;
        border-color: transparent;
        padding: 10px;
        width: 100%;
        outline: none;
        margin-top: 1rem;
  
        @media (max-width: 1100px) {
          width: 100%;
        }
      }
    }
  }
  
  .submit-email {
    text-decoration: none;
    color: white;
    font-weight: 700;
    background-color: #ff4d30;
    padding: .5rem;
    border-radius: 0.3rem;
    box-shadow: 0 10px 15px 0 rgb(255 83 48 / 25%);
    transition: all 0.3s;
    border: 2px solid #ff4d30;
    font-size: 1.6rem;
    width: fit-content;
    cursor: pointer;
    width: 100%;
  
    &:hover {
      box-shadow: 0 10px 15px 0 rgb(255 83 48 / 40%);
      background-color: #fa4226;
    }
  }


`;
    

