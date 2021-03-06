//Core
import styled from 'styled-components';

export const StylesLayout = styled.div`
	display: grid;
	grid-template-areas:
		'header header header'
		'nav article aside';
	grid-template-rows: 3rem 1fr;
	grid-template-columns: 22% 1fr 20%;
	grid-gap: 20px;
	height: 100vh;
	margin: 0;
	max-width: 1280px;
	margin: 0 auto;
`;
