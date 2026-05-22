import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../config/api'
import { getBookById } from '../api/books.api'
import type { Book } from '../types/book.types'

const BookDetailsPage = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const [book, setBook] = useState<Book | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchBook = async () => {
			if (!id) return

			const data = await getBookById(id)

			setBook(data)
			setLoading(false)
		}

		fetchBook()
	}, [id])

	if (loading) {
		return <h1 className='text-white'>Loading...</h1>
	}

	if (!book) {
		return <h1 className='text-red-500'>Book not found</h1>
	}

	return (
		<div className='text-white'>
			<div className='flex gap-10 max-lg:flex-col'>
				<img
					src={`${API_URL}${book.image}`}
					alt={book.title}
					className='w-[300px] rounded-3xl shadow-2xl'
				/>

				<div>
					<p className='text-[#ef8361]'>
						{book.genre}
					</p>

					<h1 className='text-5xl font-bold mt-3'>
						{book.title}
					</h1>

					<p className='mt-3 text-gray-400'>
						by {book.author}
					</p>

					<div className='mt-5'>
						⭐ {book.rating}/5
					</div>

					<p className='mt-8 max-w-2xl leading-8 text-gray-300'>
						{book.description}
					</p>

					<button
						onClick={() => navigate(`/reader/${book.id}`)}
						className='mt-10 px-8 py-3 bg-[#ef8361] rounded-2xl hover:scale-105 transition'
					>
						Read Now
					</button>
				</div>
			</div>

			<div className='mt-20'>
				<h2 className='text-3xl font-bold'>
					Preview
				</h2>

				<div className='mt-8 bg-[#1f1f1f] p-8 rounded-3xl'>
					<p className='leading-9 text-gray-300'>
						{book.content.split('[pagebreak]')[0].substring(0, 700)}...
					</p>
				</div>
			</div>
		</div>
	)
}

export default BookDetailsPage