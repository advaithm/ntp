import styled, { css } from "styled-components";

export const SettingsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    justify-content: center;
    align-items: center;
`;

export const SettingsDialog = styled.div`
	max-width: 88rem;
	max-height: 950px;
	display: flex;
	width: 100vw;
	height: 100vh;
	background-color: white;
	border-radius: 6px;
	padding: 24px;
`;

export const SettingsBackground = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #00000073;
`;