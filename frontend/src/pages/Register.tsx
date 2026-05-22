import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../api/auth.api'

const Register = () => {
	const navigate = useNavigate()

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			setLoading(true)
			setError('')

			await register({
				username,
				email,
				password,
			})

			navigate('/login')
		} catch {
			setError('Registration failed')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='w-full max-w-md bg-[#1E293B] p-8 rounded-3xl'>
			<h1 className='text-4xl font-bold text-white text-center'>Register</h1>

			<form onSubmit={handleRegister} className='mt-10 flex flex-col gap-5'>
				<input
					value={username}
					onChange={e => setUsername(e.target.value)}
					placeholder='Username'
					className='bg-[#0F172A] text-white px-5 py-4 rounded-xl'
				/>

				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='Email'
					className='bg-[#0F172A] text-white px-5 py-4 rounded-xl'
				/>

				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='Password'
					className='bg-[#0F172A] text-white px-5 py-4 rounded-xl'
				/>

				<button
					disabled={loading}
					className='bg-[#6366F1] hover:bg-[#4F46E5] transition py-4 rounded-xl text-white font-semibold disabled:opacity-50'
				>
					{loading ? 'Creating...' : 'Create Account'}
				</button>
				{error && <p className='text-red-400 text-sm'>{error}</p>}
			</form>
		</div>
	)
}

export default Register
