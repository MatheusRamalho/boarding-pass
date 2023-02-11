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

        margin-bottom: 1.5rem;
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
        font-weight: 500;
        color: rgba(0, 0, 0, 0.88);
    }
`;
