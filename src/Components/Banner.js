import React from 'react'
import styled from 'styled-components'


export default function Banner() {
    return (
        <StylesCont>
            <div>
                <div>
                    Banner
                </div>
            </div>
        </StylesCont>
    )
}

const StylesCont = styled.div`
    height: 25vh;
    background: #191919;
    color: white;
    margin-top: 15rem;
    padding: 40px;
`;
