import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
	return (
		<div className='min-h-screen bg-[#0F172A] flex items-center justify-center p-5'>
			<Outlet />
		</div>
	)
}

export default AuthLayout
