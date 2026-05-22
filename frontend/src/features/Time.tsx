import { useEffect, useState } from 'react'

const Time = () => {
	const [time, setTime] = useState(new Date())
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date())
		}, 1000)
		return () => clearInterval(interval)
	}, [])
	const formattedTime = time.toLocaleTimeString()
	const formattedDate = time.toLocaleDateString()
	return (
		<div className='grid grid-cols-2 py-2 xl:px-4 px-1 max-lg:pr-5 gap-3 xl:gap-16 rounded-[40px] bg-[#232839]'>
			<div className=''>{formattedTime}</div>
			<div className=''>{formattedDate} </div>
		</div>
	)
}

export default Time
