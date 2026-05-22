import { useState } from 'react'

const languages = ['EN', 'RU', 'KZ']

const Language = () => {
	const [open, setOpen] = useState(false)
	const [language, setLanguage] = useState('EN')
	return (
		<div className='relative w-24'>
			<button
				onClick={() => setOpen(!open)}
				className='w-full xl:px-4 py-2 rounded-[40px] items-center flex gap-1.5 justify-center bg-[#232839]'
			>
				{language} <span className='text-[10px]'>▼</span>
			</button>
			{open && (
				<div className='absolute mt-2 w-full bg-[#232839] rounded-xl shadow-lg overflow-hidden'>
					{languages.map(lang => (
						<div
							key={lang}
							onClick={() => {
								setLanguage(lang)
								setOpen(false)
							}}
							className='px-4 py-1 hover:bg-[#3a4056] cursor-pointer'
						>
							{lang}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Language
