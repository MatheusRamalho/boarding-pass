import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    &::-webkit-scrollbar {
        width: 0.75rem;
        padding-right: 0.25rem;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 0.125rem;
        background: #D6D6D6;
    }

    body {
        width: 100%;
        height: 100%;
        /* background: linear-gradient(129deg,#1c0c20 45%,#000); */
        background: linear-gradient(167.96deg, #8257E5 0%, #271A45 100%);

        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        color: #FFFFFF;

        scroll-behavior: smooth;
    }

    .content {
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    main {
        width: 25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        text-align: center;

        .text {
            padding: 0 2rem;
            font-size: 1rem;
        }
    }

    span {
        color: rgba(0, 0, 0, 0.64);
    }

    p {
        font-weight: 500;
        line-height: 30px;

        &.text-pattern {
            font-weight: 400;
        }
    }

    @media (max-width: 500px) {
        span {
            font-size: 0.9rem;
        }
    }
`;
