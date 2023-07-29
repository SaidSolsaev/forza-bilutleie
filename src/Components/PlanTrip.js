import styled from "styled-components";
import SelectCar from "../Images/icon1.png";
import Contact from "../Images/icon2.png";
import Drive from "../Images/icon3.png";

function PlanTrip() {
    return (
        <Container>
            <section className="plan-section">
                <div className="container">
                    <div className="plan-container">
                        <div className="plan-container__title">
                            <h3>Planlegg din neste bil opplevelse med våre biler</h3>
                            <h2>Lei bil Raskt & Enkelt</h2>
                        </div>

                        <div className="plan-container__boxes">
                            <div className="plan-container__boxes__box">
                                <img src={SelectCar} alt="icon_img" />
                                <h3>Velg Bil</h3>
                                <p>
                                    We offers a big range of vehicles for all your driving needs.
                                    We have the perfect car to meet your needs
                                </p>
                            </div>

                            <div className="plan-container__boxes__box">
                                <img src={Contact} alt="icon_img" />
                                <h3>Kontakt Oss</h3>
                                <p>
                                    Our knowledgeable and friendly operators are always ready to
                                    help with any questions or concerns
                                </p>
                            </div>

                            <div className="plan-container__boxes__box">
                                <img src={Drive} alt="icon_img" />
                                <h3>Let's Drive</h3>
                                <p>
                                    Whether you're hitting the open road, we've got you covered
                                    with our wide range of cars
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
  );
}

export default PlanTrip;

const Container = styled.div`



    .plan-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 15rem;
        margin-top: 5rem;

        &__title {
            text-align: center;
            
            h3 {
                margin-bottom: 2rem;
                font-weight: 500;
            }

        }

        &__boxes {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            margin-top: 3.7rem;

                @media (max-width: 1021px) {
                    grid-template-columns: 1fr 1fr;
                    row-gap: 2rem;
                }

                @media (max-width: 800px) {
                    grid-template-columns: 1fr;
                    margin-top: 1rem;
                }

                &__box {
                    text-align: center;
                    padding: 1rem 6rem;

                @media (max-width: 500px) {
                    padding: 1rem 1rem;
                }

                img {
                    width: 15rem;
                    height: auto;
                }

                h3 {
                    margin-bottom: 1rem;
                }

                p {
                    line-height: 1.43;
                }
            }
        }
    }

`;