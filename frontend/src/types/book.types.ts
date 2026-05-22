export type BookPreview = {
	id: number
	title: string
	author: string
	genre: string
	image: string
}

export type Book = {
	id: number
	title: string
	author: string
	year: number
	genre: string
	description: string
	content: string
	edition: string
	image: string
	rating: number
	category: string
	status: string
}

export type Favorite = {
	id: number
	book: Book
}
