//Core
import React from 'react';
//Components
import PostItem from '../PostItem';
//Styles
import { StyledMain, StyledList } from './PostsList.styles';

type PostItemProps = {
	id: number;
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

type PostsListProps = {
	posts: Array<PostItemProps>;
};

const PostsList = ({ posts }: PostsListProps) => {
	return (
		<StyledMain>
			<StyledList>
				{posts.map(({ id, ...post }) => (
					<PostItem key={id} post={post} />
				))}
			</StyledList>
		</StyledMain>
	);
};

export default PostsList;
