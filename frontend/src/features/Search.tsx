import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getBooks } from '../api/books.api';

const Search = () => {
	const [search, setSearch] = useState('');

	const { data } = useQuery({
		queryKey: ['books'],
		queryFn: () => getBooks(),
	});

	const filteredBooks = data
		? data.filter(book =>
				book.title.toLowerCase().includes(search.toLowerCase()),
			)
		: [];

	return (
		<div className=''>
			<input
				type='text'
				placeholder='Search book...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				className='w-full xl:px-14 max-lg:pl-2 py-2 rounded-[40px] bg-[#232839] outline-none'
			/>
			{search.trim() !== '' && (
				<div className='mt-5 flex flex-col absolute gap-2'>
					{filteredBooks &&
						filteredBooks.map((book, index) => (
							<div
								className='bg-[#232839] text-white px-10 py-1 rounded-[40px]'
								key={index}
							>
								{book.title}
							</div>
						))}
				</div>
			)}
		</div>
	);
};

export default Search;
