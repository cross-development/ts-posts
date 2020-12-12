//Core
import React from 'react';
//Services
import { getPostsByTag } from 'services/controller';
//Styles
import { StyledContainer, StyledTitle, StyledTagList } from './PostItem.styles';
import { StyledAuthorInfo, StyledAuthorName, StyledCreated } from './PostItem.styles';
import { StyledArticle, StyledHiddenLink, StyledContentWrap } from './PostItem.styles';
import { StyledPromoLink, StyledAuthorWrap, StyledAvatarWrap } from './PostItem.styles';
import { StyledArticleInfo, StyledDescription, StyledTagItem } from './PostItem.styles';

type PostItemProps = {
	post: {
		title: string;
		description: string;
		url: string;
		social_image: string;
		created_at: string;
		tag_list: Array<string>;
		user: {
			name: string;
			profile_image_90: string;
		};
	};
};

const PostItem = ({ post }: PostItemProps) => {
	const { title, description, url, social_image, created_at, tag_list, user } = post;
	const { name, profile_image_90 } = user;

	const tagList = tag_list.map(tag => <StyledTagItem key={tag}>#{tag}</StyledTagItem>);

	const createdAt = new Date(created_at).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
	});

	return (
		<StyledArticle>
			<StyledHiddenLink href={url} rel="noreferrer noopener">
				{title}
			</StyledHiddenLink>

			<StyledContainer>
				<StyledPromoLink href={url}>
					<img src={social_image} alt={title} />
				</StyledPromoLink>

				<StyledContentWrap>
					<StyledAuthorWrap>
						<StyledAvatarWrap>
							<img src={profile_image_90} alt={name} />
						</StyledAvatarWrap>
						<StyledAuthorInfo>
							<StyledAuthorName>{name}</StyledAuthorName>
							<StyledCreated>{createdAt}</StyledCreated>
						</StyledAuthorInfo>
					</StyledAuthorWrap>

					<StyledArticleInfo>
						<StyledTitle>
							<a href={url} rel="noreferrer noopener" target="_blank">
								{title}
							</a>
						</StyledTitle>
						<StyledTagList>{tagList}</StyledTagList>
						<StyledDescription>{description}</StyledDescription>
					</StyledArticleInfo>
				</StyledContentWrap>
			</StyledContainer>
		</StyledArticle>
	);
};

export default PostItem;
