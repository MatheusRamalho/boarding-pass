import styled from "styled-components";

export const TicketFlightInfotWrapper = styled.div`
    padding: 2.5rem 2rem 1.5rem 2rem;
    background-color: #FFFFFF;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;

    .flight-info-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .flight-info-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .flight-info-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        padding-bottom: 1.5rem;

        &--end {
            align-items: flex-end;
        }

        h1 {
            font-weight: 500;
            font-size: 2.5rem;
            text-transform: uppercase;
        }

        h1, p {
            font-weight: 500;
            color: rgba(0, 0, 0, 0.88);
        }
    }
`;
