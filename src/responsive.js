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
        @media only screen and (min-width: 1200px) {
            ${props}
        }
    `;
};

// 

// export const laptops = (props) => {
//     return css`
//         @media only screen and (min-width: 600px) {
//             ${props}
//         }
//     `;
// };

// export const desktop = (props) => {
//     return css`
//         @media only screen and (min-width: 600px) {
//             ${props}
//         }
//     `;
// };

// export const TV = (props) => {
//     return css`
//         @media only screen and (min-width: 600px) {
//             ${props}
//         }
//     `;
// };
