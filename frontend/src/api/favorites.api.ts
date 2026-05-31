import { http } from '.';

export const getFavorites = async () => {
	const response = await http.get(`/favorites/`);
	return response.data;
};

export const addFavorite = async (bookId: number) => {
	const response = await http.post(`/favorites/`, {
		book_id: bookId,
	});

	return response.data;
};

export const removeFavorite = async (favoriteId: number) => {
	await http.delete(`/favorites/${favoriteId}/`);
};
