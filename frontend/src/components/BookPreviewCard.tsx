import { useNavigate } from 'react-router-dom';

type BookPreview = {
	id: number;
	title: string;
	author: string;
	genre: string;
	image: string;
};

type Props = {
	book: BookPreview;
};

const BookPreviewCard = ({ book }: Props) => {
	const navigate = useNavigate();
	return (
		<div
			className='bg-[rgba(255,255,255,0.03)] p-4 rounded-2xl w-[220px] hover:scale-105 transition duration-300 cursor-pointer'
			onClick={() => navigate(`/book/${book.id}`)}
		>
			<img
				src={new URL(book.image).pathname}
				alt={book.title}
				className='w-full h-[300px] object-cover rounded-xl'
			/>

			<div className='mt-4'>
				<h3 className='text-[#4d4d4d] text-lg font-semibold'>{book.title}</h3>

				<p className='text-sm text-gray-500 mt-1'>{book.author}</p>

				<p className='text-xs text-[#ef8361] mt-2'>{book.genre}</p>
			</div>
		</div>
	);
};

export default BookPreviewCard;
