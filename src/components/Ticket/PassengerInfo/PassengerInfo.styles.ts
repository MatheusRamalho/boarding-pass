import styled from "styled-components";

export const TicketPassengerInfoWrapper = styled.div`
    padding: 1.5rem 2rem;
    background-color: #FFFFFF;

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
        font-weight: 700;
        color: rgba(0, 0, 0, 0.88);
    }
`;
