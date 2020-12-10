//API
import devToApi from './devToApi';

const setSearchParams = (tag: string): void => {
	devToApi.searchTag = tag;
};

interface PostsProps {
	setPosts: (args: Array<any>) => void;
	setError: (args: string) => void;
	setLoading: (args: boolean) => void;
}

export const getAllDevPosts = ({ setPosts, setError, setLoading }: PostsProps): void => {
	setLoading(true);

	devToApi
		.fetchAllDevPosts()
		.then(({ data, status }) => (status === 200 ? setPosts(data) : setError(data)))
		.catch(error => setError(error))
		.finally(() => setLoading(false));
};

interface PostsTagProps extends PostsProps {
	query: string;
}

export const getPostsByTag = ({ query, setPosts, setError, setLoading }: PostsTagProps): void => {
	setLoading(true);

	setSearchParams(query);

	devToApi
		.fetchDevPostsByTag()
		.then(({ data, status }) => (status === 200 ? setPosts(data) : setError(data)))
		.catch(error => setError(error))
		.finally(() => setLoading(false));
};
