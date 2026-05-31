import { http } from '.';
import type { Book } from '../types/book.types';

export const getBooks = async (): Promise<Book[]> => {
	const response = await http.get(`/books/`);

	if (response.status !== 200) {
		throw new Error('Failed to fetch books');
	}

	return response.data;
};

export const getBookById = async (id: string): Promise<Book> => {
	const response = await http.get(`/books/${id}/`);

	if (response.status !== 200) {
		throw new Error('Failed to fetch books');
	}

	return response.data;
};
