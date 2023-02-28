import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 600px) {
            ${props}
        }
    `;
};

export const tablet = (props) => {
    return css`
        @media (min-width: 601px) and (max-width: 990px) {
            ${props}
        }
    `;
};

export const  largetablet = (props) => {
    return css`
    @media (min-width: 991px) and (max-width: 1300px) {
            ${props}
        }
    `;
};

