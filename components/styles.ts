import styled, { css } from 'styled-components';

export const MountEverest = styled.main`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
`;

export const BackgroundDisplay = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    transition: 0.7s opacity ease-in-out, 0.7s transform, 0.2s filter;

    @keyframes fade { 
        from: {
            opacity: 0;
        }

        to {
            opacity: 0.8;
        }
    }

    ${({ loaded, dimmed }: { loaded: boolean; dimmed: boolean }) => css`
        opacity: ${dimmed ? 0.2 : 0.8};
        transform: scale(${dimmed ? 1.01 : 1});
    `};
`;