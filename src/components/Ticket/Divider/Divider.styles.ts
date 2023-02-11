import styled from "styled-components";

export const TicketDividerWrapper = styled.div`
    position: relative;

    border: 0.063rem dashed rgba(0, 0, 0, 0.32);
    border-spacing: 15px 10px;
    background-color: var(--white);

    &::before, &::after {
        content: '';

        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);

        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: #583a9d;
    }

    &::after {
        left: auto;
        right: 0;
        transform: translate(50%, -50%);
    }
`;
