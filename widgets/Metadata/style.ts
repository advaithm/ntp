import styled, { css } from "styled-components";

export const MetadataContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: end;
	height: 100vh;
`;

export const MetadataContent = styled.div`
    padding: 16px 22px;
    font-size: 16px;
    bottom: 0;
    transition: 0.7s color;
    color: #b8b8b8a3;

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
`;

export const Geolocation = styled(MetadataContent)`
    right: 0;
    margin-left: auto;
`;