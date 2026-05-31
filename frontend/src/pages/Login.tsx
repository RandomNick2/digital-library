import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { login } from '../api/auth.api';

const Login = () => {
	const navigate = useNavigate();
	const [_, setToken] = useLocalStorage('token', '');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const data = await login({ email, password });

			if (data.access) {
				setToken(data.access);

				navigate('/');
			}
		} catch {
			setError('Invalid email or password');
		}
	};

	return (
		<div className='w-full max-w-md bg-[#1E293B] p-8 rounded-3xl shadow-2xl'>
			<h1 className='text-4xl font-bold text-white text-center'>Login</h1>

			<form onSubmit={handleLogin} className='mt-10 flex flex-col gap-5'>
				<input
					type='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='Email'
					className='bg-[#0F172A] text-white px-5 py-4 rounded-xl outline-none border border-transparent focus:border-[#6366F1]'
				/>

				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='Password'
					className='bg-[#0F172A] text-white px-5 py-4 rounded-xl outline-none border border-transparent focus:border-[#6366F1]'
				/>

				{error && <p className='text-red-400 text-sm'>{error}</p>}

				<button className='bg-[#6366F1] hover:bg-[#4F46E5] transition py-4 rounded-xl text-white font-semibold'>
					Login
				</button>
			</form>

			<p className='text-gray-400 mt-6 text-center'>
				No account?{' '}
				<Link to='/register' className='text-white'>
					Register
				</Link>
			</p>
		</div>
	);
};

export default Login;
