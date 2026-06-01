import { Link } from 'react-router-dom';
import { useProfile } from '../hook/useProfile';

const Profile = () => {
	const { profile } = useProfile();

	return (
		<Link
			to='/profile'
			className='flex items-center xl:gap-4 gap-1 bg-[#232839] rounded-[40px] xl:pr-4 pr-4 py-1'
		>
			<img
				src={
					profile.avatar
						? profile.avatar
						: '/ProfileIcon.svg'
				}
				alt=''
				className='w-10 h-10 rounded-full object-cover'
			/>

			<h2 className='text-white'>{profile.nickname}</h2>
		</Link>
	);
};

export default Profile;
