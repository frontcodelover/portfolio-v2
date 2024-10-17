import React from 'react'

interface BoxProps {
	text: string;
	colors: string;
	size: string;
	heading: string;
}

const Box: React.FC<BoxProps> = ({ text, colors, size, heading }) => {
	return (
		<div className={`${size} ${colors} rounded-3xl text-slate-200`}>
			<h3 className='font-bold md:text-2xl text-xl'>{heading}</h3>
			<div className='lg:text-5xl text-4xl'>{text}</div>
		</div>
	)
}

export default Box