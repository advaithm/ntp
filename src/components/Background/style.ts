import styled, { css } from "styled-components";

export const StyledBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;

    ${({ src }: { src: any }) => css`
        background-image: url(${src});
    `};
`