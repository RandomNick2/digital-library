import Search from '../features/Search';
import { useProfile } from '../hook/useProfile';
import Profile from './Profile';

const Navbar = () => {
	const { profile } = useProfile();

	return (
		<nav className='flex gap-2 xl:gap-10 py-4 items-center justify-between'>
			<div className='flex xl:gap-10 gap-2 items-center'>
				<Search />
				{/* <Language /> */}
				{/* <Time /> */}
			</div>

			{profile && <Profile />}
		</nav>
	);
};

export default Navbar;
