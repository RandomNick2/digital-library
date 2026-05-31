	import { useEffect, useState } from 'react'
import {
	getProfile,
	updateProfile,
} from '../api/profile.api'

const ProfilePage = () => {
	const [nickname, setNickname] = useState('')
	const [email, setEmail] = useState('')
	const [avatar, setAvatar] = useState<File | null>(null)
	const [avatarPreview, setAvatarPreview] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const data = await getProfile()

				setNickname(data.nickname)
				setEmail(data.email)

				if (data.avatar) {
					setAvatarPreview(data.avatar)
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchProfile()
	}, [])

	const handleSave = async () => {
		const formData = new FormData()

		formData.append('nickname', nickname)
		formData.append('email', email)

		if (avatar) {
			formData.append('avatar', avatar)
		}

		const data = await updateProfile(formData)

		if (data.avatar) {
			setAvatarPreview(data.avatar)
		}

		alert('Profile updated')
	}

	if (loading) {
		return (
			<h1 className='text-white text-2xl'>
				Loading...
			</h1>
		)
	}

	return (
		<div className='text-white'>
			<div className='flex flex-col items-start'>
				<h2 className='text-xl font-semibold mb-4'>
					Your Profile Picture
				</h2>

				<img
					src={
						avatarPreview
							? avatarPreview
							: '/ProfileAvatar.svg'
					}
					alt=''
					className='w-32 h-32 rounded-full object-cover border border-zinc-700'
				/>

				<label className='cursor-pointer mt-4 bg-[#232839] px-4 py-2 rounded-xl hover:bg-[#2d3448] transition'>
					Upload new photo

					<input
						type='file'
						className='hidden'
						onChange={e => {
							if (e.target.files?.[0]) {
								setAvatar(e.target.files[0])

								setAvatarPreview(
									URL.createObjectURL(
										e.target.files[0]
									)
								)
							}
						}}
					/>
				</label>
			</div>

			<div className='grid grid-cols-2 gap-10 mt-10 max-w-4xl'>
				<div className='flex flex-col gap-3'>
					<h3 className='font-medium'>
						NickName
					</h3>

					<input
						value={nickname}
						onChange={e =>
							setNickname(e.target.value)
						}
						className='bg-[#1E293B] border border-zinc-700 rounded-xl px-4 py-4 outline-none'
					/>
				</div>

				<div className='flex flex-col gap-3'>
					<h3 className='font-medium'>
						Email
					</h3>

					<input
						value={email}
						onChange={e =>
							setEmail(e.target.value)
						}
						className='bg-[#1E293B] border border-zinc-700 rounded-xl px-4 py-4 outline-none'
					/>
				</div>
			</div>

			<button
				onClick={handleSave}
				className='mt-10 bg-[#6366F1] hover:bg-[#4F46E5] transition px-8 py-4 rounded-xl'
			>
				Save Changes
			</button>
		</div>
	)
}

export default ProfilePage