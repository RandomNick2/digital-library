import type { Book } from '../types/book.types'

export const books: Book[] = [
	{
		id: 1,
		title: "Don't Make Me Think",
		author: 'Steve Krug',
		year: 2000,
		edition: 'Second Edition',
		image: '/DanBrown.svg',
		rating: 4.5,
		category: 'Computer Science',
		status: 'In shelf',
	},
	{
		id: 2,
		title: 'Clean Code',
		author: 'Robert C. Martin',
		year: 2008,
		edition: 'First Edition',
		image: '/DanBrown.svg',
		rating: 4.8,
		category: 'Programming',
		status: 'Reading',
	},
]