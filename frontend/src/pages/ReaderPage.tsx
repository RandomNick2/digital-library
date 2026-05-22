import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getBookById } from '../api/books.api'

import type { Book } from '../types/book.types'

const ReaderPage = () => {
	const { id } = useParams()

	const [book, setBook] = useState<Book | null>(null)

	const [loading, setLoading] = useState(true)

	const [currentPage, setCurrentPage] = useState(0)

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

	const pages = book.content.split('[pagebreak]')

	return (
		<div className='max-w-4xl'>
			<h1 className='text-5xl font-bold text-white'>
				{book.title}
			</h1>

			<p className='mt-10 leading-10 text-lg text-white whitespace-pre-wrap'>
				{pages[currentPage]}
			</p>

			<div className='flex gap-5 mt-10'>
				<button
					disabled={currentPage === 0}
					onClick={() => setCurrentPage(prev => prev - 1)}
					className='px-6 py-2 bg-[#ef8361] rounded-xl disabled:opacity-50'
				>
					Previous
				</button>

				<button
					disabled={currentPage === pages.length - 1}
					onClick={() => setCurrentPage(prev => prev + 1)}
					className='px-6 py-2 bg-[#ef8361] rounded-xl disabled:opacity-50'
				>
					Next
				</button>
			</div>
		</div>
	)
}

export default ReaderPage