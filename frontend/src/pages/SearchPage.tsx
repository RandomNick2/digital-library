import { useEffect, useState } from 'react'

import BookCard from '../components/BookCard'

import { getBooks } from '../api/books.api'

import {
	getFavorites,
	addFavorite,
	removeFavorite,
} from '../api/favorites.api'

import type {
	Book,
	Favorite,
} from '../types/book.types'

const SearchPage = () => {
	const [books, setBooks] = useState<Book[]>([])

	const [favorites, setFavorites] = useState<Favorite[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const booksData = await getBooks()

			const favoritesData = await getFavorites()

			setBooks(booksData)

			setFavorites(favoritesData)
		}

		fetchData()
	}, [])

	const toggleFavorite = async (book: Book) => {
		const existingFavorite = favorites.find(
			item => item.book.id === book.id
		)

		if (existingFavorite) {
			await removeFavorite(existingFavorite.id)

			setFavorites(prev =>
				prev.filter(item => item.id !== existingFavorite.id)
			)
		} else {
			const newFavorite = await addFavorite(book.id)

			setFavorites(prev => [...prev, newFavorite])
		}
	}

	return (
		<div className='text-[#4d4d4d]'>
			<div className='flex pb-4 border-b border-gray-300 text-sm font-semibold uppercase tracking-wide text-gray-500'>
				<h3 className='flex-1'>Title</h3>

				<h3 className='flex-1'>Ratings</h3>

				<h3 className='flex-1'>Category</h3>

				<h3 className='flex-1'>Status</h3>
			</div>

			{books.map(book => (
				<BookCard
					key={book.id}
					book={book}
					isLiked={favorites.some(
						item => item.book.id === book.id
					)}
					toggleFavorite={toggleFavorite}
				/>
			))}
		</div>
	)
}

export default SearchPage