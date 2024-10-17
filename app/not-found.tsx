import React from 'react';

const notFound = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='text-4xl font-black'>404 - Page Not Found</h1>
			<p className='text-xl font-light'>This page does not exist.</p>
		</div>
	);
};

export default notFound;
