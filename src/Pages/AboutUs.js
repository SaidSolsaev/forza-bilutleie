import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function AboutUs() {
    return (
        <Styles>
            <Container>
                <section className='about-section'>
                    <div className='title'>
                        <h5>Luksus- og Sports bilutleie</h5>
                        <h3>Vi er Forza Premium</h3>
                        <p>Bla ned over for å bli kjent med oss <a href='#content'><ArrowDownwardIcon /></a></p>
                    </div>

                    <div className='content' id='content'>
                        <div className='about-us'>
                            <h3>Om oss</h3>
                            <h2>Velkommen til Forza Premium</h2>
                        </div>

                        <div className='about-us__info'>
                            <p>Vi tilbyr det beste av det beste innen bilutleie av luksuriøse biler i Oslo og omegn.</p>
                            <p>Vi har et bredt utvalg av luksusbiler for å dekke dine behov, enten det er en spesiell anledning eller om du bare ønsker å cruise rundt i stil. Våre biler er nøye utvalgt for å gi deg den ultimate opplevelsen av komfort og ytelse.</p>
                            <p>Vårt mål er at du får en førsteklasses service fra start til slutt. Vi tilbyr konkurransedyktige priser og personlig service som vil gjøre ditt leieforhold enkelt og bekymringsfritt. Vårt team består av  erfarne og profesjonelle ansatte vil hjelpe deg med å velge den perfekte bilen for ditt behov.</p>
                            <p>På vår nettside & app kan du enkelt søke etter og reservere din luksusbil. Vi tilbyr fleksible leieperioder og tilbyr også spesielle avtaler for langtidsleie. I tillegg kan du gjøre gruppebestillinger på flere biler.</p>
                            <p>Vårt motto er at du skal få en opplevelse du sent vil glemme😊</p>
                            <p>Kontakt oss i dag for å bestille din drømmebil og oppleve en uforglemmelig tur med Forza Premium. Ved gruppe bestilling ta direkte kontakt.</p>
                        </div>
                    </div>

                    <div className='staff'>

                    </div>
                </section>
            </Container>
        </Styles>
    );
};

const Styles = styled.div`
    

    .about-section{
        padding-top: 5rem;
        padding-bottom: 10rem;
    }

    .title{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        h3{
            margin: 2rem;
        }

        p{
            font-size: 18px;
            line-height: 3;
            
            a{
                margin-left: 15px;
                
                svg{
                    color: red;
                    cursor: pointer;
                    font-size: 34px;
                    animation: jumpInfinite .5s infinite;
                }
                
            }
        }
    }

    @keyframes jumpInfinite {
        0% {
          margin-top: 0;
        }
        50% {
          margin-top: 15px;
        }
        100% {
          margin-top: 0px;
        }
    }

    .content{
        margin-top: 10vh;
        
        .about-us{
            text-align: center;
            margin-bottom: 3rem;

            &__info{
                line-height: 3rem;
            }
        }
    }

`;
