//Core
import React from 'react';
//Components
import HashLoader from 'react-spinners/HashLoader';
//Styles
import { css } from '@emotion/core';
import { StyledLoaderWrap } from './Loader.styles';

const override = css`
	display: block;
	margin: 0 auto;
`;

interface LoaderProps {
	onLoad: boolean;
}

const Loader = ({ onLoad }: LoaderProps) => (
	<StyledLoaderWrap>
		<HashLoader css={override} size={50} color={'#5F5F5F'} loading={onLoad} />
	</StyledLoaderWrap>
);

export default Loader;
