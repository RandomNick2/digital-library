import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { getProfile } from '../api/profile.api';

export const useProfile = () => {
	const [token] = useLocalStorage('token', '');
	const navigate = useNavigate();
	const { pathname } = useLocation();
	
	if (!token && pathname != '/login') navigate('/login');

	const {
		data: profile,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
		enabled: !!token,
	});

	useEffect(() => {
		if (isError) {
			console.log('error');
			return;
		}

		if (isLoading) return;
	}, [profile, isLoading, isError]);

	return { profile };
};
