import styled from "styled-components";

export const TicketDividerWrapper = styled.div`
    position: relative;

    border: 0.063rem dashed rgba(0, 0, 0, 0.32);
    border-spacing: 15px 10px;
    background-color: #FFFFFF;

    &::before, &::after {
        content: '';

        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);

        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        /* background: linear-gradient(129deg,#1c0c20 45%,#000); */
        background-color: #583a9d;
        /* background: linear-gradient(167.96deg, #8257E5 0%, #271A45 100%); */
    }

    &::after {
        left: auto;
        right: 0;
        transform: translate(50%, -50%);
    }
`;
