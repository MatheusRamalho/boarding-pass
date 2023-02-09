import styled from "styled-components";

export const TicketDividerWrapper = styled.div`
    position: relative;

    border: 0.063rem dashed rgba(0, 0, 0, 0.32);
    background-color: #FFFFFF;

    &::before, &::after {
        content: '';

        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);

        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        background: linear-gradient(129deg,#1c0c20 45%,#000);
    }

    &::after {
        left: auto;
        right: 0;
        transform: translate(50%, -50%);
    }
`;
