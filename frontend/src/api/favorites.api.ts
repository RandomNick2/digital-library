import { API_URL } from '../config/api'

export const getFavorites = async () => {
	const response = await fetch(`${API_URL}/api/favorites/`)

	return response.json()
}

export const addFavorite = async (bookId: number) => {
	const response = await fetch(`${API_URL}/api/favorites/`, {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			book_id: bookId,
		}),
	})

	return response.json()
}

export const removeFavorite = async (favoriteId: number) => {
	await fetch(`${API_URL}/api/favorites/${favoriteId}/`, {
		method: 'DELETE',
	})
}