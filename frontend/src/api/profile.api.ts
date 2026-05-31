import { http } from '.';

export const getProfile = async () => {
	const response = await http.get(`/profile/`);
	return response.data;
};

export const updateProfile = async (formData: FormData) => {
	const response = await http.patch(`/profile/`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	return response.data;
};
