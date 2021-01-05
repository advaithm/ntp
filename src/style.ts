import styled from "styled-components";

export const StyledApp = styled.main`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    // Syntax:
        // tl (top left) // tc (top center) // tr (top right)
        // cl (center left) // cc (center center) // cr (center right)
        // bl (bottom left) // bc (bottom center) // br (bottom right)

    grid-gap: 10px;
`;