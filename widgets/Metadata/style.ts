import styled, { css } from "styled-components";

export const MetadataContainer = styled.div`
    display: flex;
	justify-content: center;
    height: 64px;
    width: 100vw;

    position: absolute;
    left: 0;
    bottom: 0;

    @media(max-width: 750px) {
        flex-direction: column;
        margin-bottom: 22px;
    }
`;

export const MetadataContent = styled.div`
    padding: 16px 22px;
    font-size: 16px;
    bottom: 0;
    transition: 0.7s color;
    color: #b8b8b8a3;

    width: 100%;

    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 22px;

    &:hover {
        color: #ffffffb0;
    }

    &:hover > a {
        color: white;
    }

    &:hover > a:hover {
        box-shadow: 0px 2px 0px 0px white;
    }

    a {
        color: #f2f2f2a3;
        text-decoration: none;
        box-shadow: 0px 0px 0px 0px transparent;
        transition: 0.15s box-shadow, 0.7s color;
        font-weight: 600;
        margin: 0 4px;
    }

    a:hover {
        box-shadow: 0px 2px 0px 0px #f2f2f2a3;
    }
`;

export const AttributionText = styled(MetadataContent)`
    left: 0;

    @media(max-width: 750px) {
        justify-content: center;
    }
`;

export const Geolocation = styled(MetadataContent)`
    right: 0;
    justify-content: flex-end;
    margin-left: auto;

    @media(max-width: 750px) {
        justify-content: center;
    }
`;