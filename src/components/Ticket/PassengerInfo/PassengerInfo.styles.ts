import styled from "styled-components";

export const TicketPassengerInfoWrapper = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--white);

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &:last-child {
            align-items: flex-end;
        }
    }

    p {
        color: rgba(0, 0, 0, 0.88);
    }

    @media (max-width: 500px) {
        padding: 1.5rem;
    }
`;
