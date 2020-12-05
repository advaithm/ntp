import styled, { css } from "styled-components";

export const StyledTime = styled.time`
	animation: fadein 1s;

	margin: 0;
	color: white;
	font-size: 8rem;
	font-weight: 700;
	width: min-content;
	transform: translate(-50%, -50%);
	left: 50%;
	top: 50%;
	position: absolute;
	
	@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
	}
`;