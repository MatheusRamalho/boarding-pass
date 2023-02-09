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
        background: linear-gradient(129deg,#1c0c20 45%,#000);

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
            padding: 0 5rem;
            font-size: 0.754rem;
        }
    }

    span {
        font-size: 0.875rem;
        color: rgba(0, 0, 0, 0.64);
    }

    p {
        line-height: 24px;
    }
`;
