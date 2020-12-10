//Core
import axios, { AxiosResponse } from 'axios';

const corsProxy = 'https://cors-anywhere.herokuapp.com';

axios.defaults.baseURL = `${corsProxy}/https://dev.to/api`;
axios.defaults.headers.common['api-key'] = 'Tu675SeqgQZ5BcFPyEfSDzaX';

type DevToApiTypes = {
	tag: string;
	searchTag: string;
	fetchDevPostsByTag: () => Promise<AxiosResponse<any>>;
	fetchAllDevPosts: () => Promise<AxiosResponse<any>>;
};

const devToApi: DevToApiTypes = {
	tag: '',

	async fetchDevPostsByTag() {
		try {
			return await axios.get(`/articles?per_page=21&tag=${this.tag}`);
		} catch (error) {
			throw Error(error);
		}
	},

	async fetchAllDevPosts() {
		try {
			return await axios.get('/articles?per_page=21');
		} catch (error) {
			throw Error(error);
		}
	},

	set searchTag(tag: string) {
		this.tag = tag;
	},
};

export default devToApi;
