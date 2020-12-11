//Core
import styled from 'styled-components';

export const StyledArticle = styled.article`
	border-radius: 5px;
	box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.1);
	position: relative;
	background-color: #fff;
	overflow: hidden;

	&:not(:last-child) {
		margin-bottom: 1em;
	}
`;

export const StyledHiddenLink = styled.a`
	pointer-events: none;
	opacity: 0;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const StyledContainer = styled.div`
	position: sticky;
`;

export const StyledContentWrap = styled.div`
	padding: 1rem;
`;

export const StyledPromoLink = styled.a`
	& img {
		width: 100%;
	}
`;

export const StyledAuthorWrap = styled.div`
	display: flex;
	margin-bottom: 0.5rem;
`;

export const StyledAvatarWrap = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 100%;
	overflow: hidden;
	margin-right: 0.5rem;

	& img {
		width: 100%;
		height: 100%;
	}
`;

export const StyledAuthorInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const StyledAuthorName = styled.p`
	color: #4d5670;
	font-weight: bold;
`;

export const StyledCreated = styled.p`
	color: #64707d;
`;

export const StyledArticleInfo = styled.div`
	padding-left: 3rem;
`;

export const StyledTitle = styled.h3`
	margin-bottom: 0.5rem;
	font-size: 1.8rem;
`;

export const StyledTagList = styled.ul`
	display: flex;
	list-style: none;
	flex-direction: row;
	margin-bottom: 0.5rem;
`;

export const StyledTagItem = styled.li`
	padding: 0.25rem;

	& a {
		text-decoration: none;
	}
`;

export const StyledDescription = styled.p``;
