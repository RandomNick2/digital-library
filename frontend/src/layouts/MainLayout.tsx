import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const MainLayout = () => {
	return (
		<div className='flex h-screen bg-[#0f0f0f] text-white'>
			<Sidebar />

			<div className='flex flex-col flex-1'>
				<div className='px-6 border-b border-zinc-800'>
					<Navbar />
				</div>

				<main className='flex-1 p-6 overflow-auto'>
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default MainLayout