import { Link } from 'react-router-dom'
import Language from '../features/Language'
import Search from '../features/Search'
import Time from '../features/Time'
import Profile from './Profile'
const Navbar = () => {
	return (
		<nav className='flex gap-2 xl:gap-10 py-4 items-center justify-between'>
			<div className='flex xl:gap-10 gap-2 items-center'>
				<Search />
				<Language />
				<Time />
			</div>

			<Link to='/profile'>
				<Profile />
			</Link>
		</nav>
	)
}

export default Navbar
