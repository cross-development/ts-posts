//API
import devToApi from './devToApi';

export const setSearchParams = (tag: string): void => {
	devToApi.searchTag = tag;
};

type PostsProps = {
	setPosts: (args: Array<any>) => void;
	setError: (args: Boolean) => void;
	setLoading: (args: Boolean) => void;
};

export const getAllDevPosts = ({ setPosts, setError, setLoading }: PostsProps): void => {
	setLoading(true);

	devToApi
		.fetchDevPostsByTag()
		.then(console.log)
		// .then(response => (status === 200 ? setWeather(response) : setError(response)))
		.catch(error => setError(error))
		.finally(() => setLoading(false));
};

export const getForecastWeather = ({ setPosts, setError, setLoading }: PostsProps): void => {
	setLoading(true);

	devToApi
		.fetchAllDevPosts()
		.then(console.log)
		.catch(error => setError(error))
		.finally(() => setLoading(false));
};
