import axios from 'axios'
import { getToken } from '../utils/token'

const API_URL = 'http://127.0.0.1:8000/api'

export const getProfile = async () => {
	const response = await axios.get(`${API_URL}/profile/`, {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	})

	return response.data
}

export const updateProfile = async (formData: FormData) => {
	const response = await axios.patch(
		`${API_URL}/profile/`,
		formData,
		{
			headers: {
				Authorization: `Bearer ${getToken()}`,
				'Content-Type': 'multipart/form-data',
			},
		}
	)

	return response.data
}