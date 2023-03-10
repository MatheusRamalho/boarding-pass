import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --primary50: #996DFF;
        --primary100: #8257E5;
        --primary200: #6F48C9;
        --primary300: #271A45;
        --secondary50: #04D361;
        --white: #FFFFFF;
        --gradient: linear-gradient(167.96deg, var(--primary100) 0%, var(--primary300) 100%);
    }

    html, body {
        scroll-behavior: smooth;
    }

    &::-webkit-scrollbar {
        width: 0.75rem;
        padding-right: 0.25rem;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 0.125rem;
        background: var(--primary300);
    }

    .App {
        width: 100%;
        height: 100vh;
        background: var(--gradient);

        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        color: var(--white);

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

    footer {
        position: fixed;
        right: 50px;
        bottom: 40px;

        a {
            font-weight: 500;
            color: var(--white);
            text-decoration: none;

            &:hover {
                font-weight: 700;
            }
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
