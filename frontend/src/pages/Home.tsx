import { useEffect, useState } from 'react'

import BookPreviewCard from '../components/BookPreviewCard'

import { getBooks } from '../api/books.api'

import type { Book } from '../types/book.types'

const Home = () => {
	const [books, setBooks] = useState<Book[]>([])

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const data = await getBooks()

				setBooks(data)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		fetchBooks()
	}, [])

	if (loading) {
		return <h1 className='text-white'>Loading...</h1>
	}

	return (
		<div>
			<h1 className='text-[#4d4d4d] font-semibold text-3xl'>
				Good Morning!
			</h1>

			<section className='mt-10'>
				<div className='flex items-center justify-between'>
					<h2 className='text-[#4d4d4d] text-2xl font-semibold'>
						Recommended for You
					</h2>
				</div>

				<div className='flex gap-8 mt-6 flex-wrap'>
					{books.map(book => (
						<BookPreviewCard
							key={book.id}
							book={book}
						/>
					))}
				</div>
			</section>
		</div>
	)
}

export default Home