import styled from "styled-components";

export const TicketBoardingInfoWrapper = styled.div`
    padding: 1.5rem 2rem;
    background-color: #FFFFFF;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;

    .boarding-info-wrapper {
        display: flex;
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
    }
`;
