import styled, { css } from 'styled-components';

export const MountEverest = styled.main`
    height: 100%;
    position: fixed;
    top: 0;
    overflow: hidden;
    transition: 0.3s width, 0.3s left;
    display: flex;

    ${({ settingsVisible }: { settingsVisible: boolean }) => css`
        width: calc(${settingsVisible ? `100% - 250px` : `100%`});
        left: ${settingsVisible ? "250px" : "0"};
    `};
`;

export const BackgroundDisplay = styled.img`
    height: 100vh;
    object-fit: cover;
    transition: 0.7s opacity ease-in-out, 0.7s transform, 0.2s filter, 0.3s width, 0.3s margin-left;

    border: 1px solid transparent;
    outline: none;

    @keyframes fade { 
        from: {
            opacity: 0;
        }

        to {
            opacity: 0.8;
        }
    }

    ${({ loaded, dimmed, settingsVisible }: { loaded: boolean; dimmed: boolean; settingsVisible: boolean }) => css`
        ${loaded ? `animation: 1s fade forwards` : ``};

        opacity: ${dimmed ? 0.2 : 0.8};
        transform: scale(${dimmed ? 1.01 : 1});

        width: calc(${settingsVisible ? `100% - 250px` : `100%`});
        margin-left: ${settingsVisible ? "250px" : "0"};
    `};
`;