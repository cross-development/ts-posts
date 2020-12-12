//Core
import React, { useState, useEffect } from 'react';
//Components
import Loader from '../Loader';
import Layout from '../Layout';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import SearchBar from '../SearchBar';
import PostsList from '../PostsList';
//Services
import { getPostsByTag, getAllDevPosts } from 'services/controller';

const App: React.FC = () => {
	const [query, setQuery] = useState<string>('');
	const [posts, setPosts] = useState<Array<any>>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<null | string>(null);

	useEffect(() => {
		if (!query) getAllDevPosts({ setPosts, setError, setLoading });
	}, [query]);

	useEffect(() => {
		if (query) getPostsByTag({ query, setPosts, setError, setLoading });
	}, [query]);

	const handleSubmit = (query: string): void => setQuery(query);

	return (
		<>
			<SearchBar onSubmit={handleSubmit} />

			<Layout>
				<NavBar />

				{loading && <Loader onLoad={loading} />}

				{posts.length > 0 && <PostsList posts={posts} />}

				<SideBar />
			</Layout>
		</>
	);
};

export default App;
