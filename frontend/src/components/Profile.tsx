import { useEffect, useState } from 'react'
import { getProfile } from '../api/profile.api'

const Profile = () => {
	const [nickname, setNickname] = useState('User')
	const [avatar, setAvatar] = useState('')

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const data = await getProfile()

				setNickname(data.nickname)

				if (data.avatar) {
					setAvatar(data.avatar)
				}
			} catch (error) {
				console.log(error)
			}
		}

		fetchProfile()
	}, [])

	return (
		<div className='flex items-center xl:gap-4 gap-1 bg-[#232839] rounded-[40px] xl:pr-4 pr-4 py-1'>
			<img
				src={
					avatar
						? `http://127.0.0.1:8000${avatar}`
						: '/ProfileIcon.svg'
				}
				alt=''
				className='w-10 h-10 rounded-full object-cover'
			/>

			<h2>{nickname}</h2>

			<span className='text-[10px]'>
				▼
			</span>
		</div>
	)
}

export default Profile