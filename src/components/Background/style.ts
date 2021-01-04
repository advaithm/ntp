import styled, { css } from "styled-components";

export const StyledBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;

    ${({ src }: { src: any }) => css`
        background-image: ${src};

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    `};
`