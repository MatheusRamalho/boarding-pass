import styled from "styled-components";

export const TicketBoardingInfoWrapper = styled.div`
    padding: 2rem 2rem 2.5rem 2rem;
    background-color: #FFFFFF;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;

    .boarding-info-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 2rem;
    }

    .boarding-info-item {
        margin-bottom: 1rem;
        text-align: left;
    }

    .boarding-info-qr-code,
    .boarding-info-notice {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    p {
        color: rgba(0, 0, 0, 0.88);

        &.boarding-info-variant {
            width: fit-content;
            padding: 0.2rem 0.7rem;
            border-radius: 0.5rem;
            background-color: #8257E5;

            font-weight: 700;
            color: #FFFFFF;
        }
    }

    @media (max-width: 500px) {
        padding: 2rem 1rem;
    }
`;
