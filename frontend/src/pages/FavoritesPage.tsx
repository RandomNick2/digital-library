import { useEffect, useState } from 'react'

import BookCard from '../components/BookCard'

import {
	getFavorites,
	removeFavorite,
} from '../api/favorites.api'

import type {
	Favorite,
	Book,
} from '../types/book.types'

const FavoritesPage = () => {
	const [favorites, setFavorites] = useState<Favorite[]>([])

	useEffect(() => {
		const fetchFavorites = async () => {
			const data = await getFavorites()

			setFavorites(data)
		}

		fetchFavorites()
	}, [])

	const removeFromFavorites = async (book: Book) => {
		const favorite = favorites.find(
			item => item.book.id === book.id
		)

		if (!favorite) return

		await removeFavorite(favorite.id)

		setFavorites(prev =>
			prev.filter(item => item.id !== favorite.id)
		)
	}

	return (
		<div>
			<h2 className='text-2xl font-bold text-[#4d4d4d] mb-5'>
				Your <span className='text-[#ef8361]'>Favorites</span>
			</h2>

			{favorites.length === 0 ? (
				<p className='text-gray-500'>
					No favorite books yet
				</p>
			) : (
				favorites.map(item => (
					<BookCard
						key={item.id}
						book={item.book}
						isLiked={true}
						toggleFavorite={removeFromFavorites}
					/>
				))
			)}
		</div>
	)
}

export default FavoritesPage