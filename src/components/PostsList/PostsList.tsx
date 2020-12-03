//Core
import React from 'react';
//Components
import PostItem from '../PostItem';
//Styles
import {} from './PostsList.styles';

type PostsListProps = {};

const PostsList = (props: PostsListProps) => {
	return (
		<div>
			<PostItem />
		</div>
	);
};

export default PostsList;
