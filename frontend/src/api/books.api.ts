import { API_URL } from '../config/api'
import type { Book } from '../types/book.types'

export const getBooks = async (): Promise<Book[]> => {
	const response = await fetch(`${API_URL}/api/books/`)

	if (!response.ok) {
		throw new Error('Failed to fetch books')
	}

	return response.json()
}

export const getBookById = async (id: string): Promise<Book> => {
	const response = await fetch(`${API_URL}/api/books/${id}/`)

	if (!response.ok) {
		throw new Error('Book not found')
	}

	return response.json()
}