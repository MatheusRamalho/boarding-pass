import styled from "styled-components";

export const TicketFlightInfotWrapper = styled.div`
    padding: 2.5rem 2rem 0.5rem 2rem;
    background-color: var(--white);
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
        text-align: left;

        &--end {
            align-items: flex-end;
            text-align: right;
        }

        h1, p {
            color: rgba(0, 0, 0, 0.88);
        }

        h1 {
            font-weight: 700;
            font-size: 2.5rem;
            text-transform: uppercase;
        }
    }

    img {
        width: 2rem;
        margin-top: -1.6rem;
        margin-left: 2rem;
    }

    @media (max-width: 500px) {
        padding: 2rem 1rem;

        .flight-info-item {
            padding-bottom: 1rem;
        }

        h1 {
            font-size: 2rem;
        }
    }
`;
