import type { Book } from '../types/book.types'
import { useNavigate } from 'react-router-dom'

type Props = {
	book: Book
	isLiked: boolean
	toggleFavorite: (book: Book) => void
}

const BookCard = ({ book, isLiked, toggleFavorite }: Props) => {
	const navigate = useNavigate()
	return (
		<div className='flex items-center py-5  border-gray-200'>
			<div className='flex-1 flex items-center gap-5'>
				<img
					src={new URL(book.image).pathname}
					alt={book.title}
					className='w-[75px] h-[99px] rounded-lg object-cover max-lg:hidden'
				/>

				<div className='max-lg:max-w-32'>
					<h2 className='lg:text-lg font-semibold text-[#4d4d4d]'>
						{book.title}
					</h2>

					<p className='lg:text-sm text-xs text-gray-500'>
						by {book.author}, {book.year}
					</p>

					<p className='text-xs text-gray-400 mt-1'>{book.edition}</p>
				</div>
			</div>

			<p className='flex-1 text-sm font-medium'>⭐ {book.rating}/5</p>

			<p className='flex-1 text-sm'>{book.category}</p>

			<div className='flex-1 flex items-center gap-5 max-lg:flex-col max-lg:gap-1'>
				<span className='text-sm'>{book.status}</span>

				<button
					onClick={() => toggleFavorite(book)}
					className={`text-2xl transition ${
						isLiked ? 'text-red-500' : 'text-gray-400'
					}`}
				>
					♥
				</button>

				<button className='px-4 py-1.5 border border-[#f76b56] text-[#f76b56] rounded-lg hover:bg-[#f76b56] hover:text-white transition' onClick={() => navigate(`/book/${book.id}`)}>
					Preview
				</button>
			</div>
		</div>
	)
}

export default BookCard
