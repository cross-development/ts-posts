//Core
import React, { useState, useEffect } from 'react';
//Components
import Layout from '../Layout';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import SearchBar from '../SearchBar';
import PostsList from '../PostsList';
//Services
import { getPostsByTag, getAllDevPosts } from 'services/controller';

const App: React.FC = () => {
	const [page, setPage] = useState<number>(1);
	const [query, setQuery] = useState<string>('');
	const [posts, setPosts] = useState<Array<any>>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<null | string>(null);

	useEffect(() => {
		getAllDevPosts({ setPosts, setError, setLoading });
	}, []);

	const handleSubmit = (query: string): void => {
		setQuery(query);
	};

	return (
		<Layout>
			<SearchBar onSubmit={handleSubmit} />

			<NavBar />

			<PostsList posts={posts} />

			<SideBar />
		</Layout>
	);
};

export default App;
