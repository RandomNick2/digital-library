import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<div className='xl:w-64 min-h-screen bg-[rgba(255,255,255,0.02)] flex flex-col items-center text-white p-5 gap-20'>
			<img src='/Logo.svg' alt='' className='' />

			<nav className='flex flex-col gap-4 text-left'>
				<Link to='/' className='hover:bg-zinc-800 p-2 rounded-lg transition'>
					Home
				</Link>

				<Link
					to='/search'
					className='hover:bg-zinc-800 p-2 rounded-lg transition'
				>
					Search
				</Link>

				<Link
					to='/favorites'
					className='hover:bg-zinc-800 p-2 rounded-lg transition'
				>
					Favorites
				</Link>
			</nav>
		</div>
	)
}

export default Sidebar
