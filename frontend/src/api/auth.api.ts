import { http } from '.';

export const register = async (data: {
	username: string;
	email: string;
	password: string;
}) => {
	const response = await http.post(`/auth/register/`, data);

	return response.data;
};

export const login = async (data: { email: string; password: string }) => {
	const response = await http.post(`/auth/login/`, data);

	return response.data;
};
