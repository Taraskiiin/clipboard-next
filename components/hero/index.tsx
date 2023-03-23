import React from 'react';

export default function Hero() {
	return (
		<section className='flex justify-center'>
			<div className='max-w-6xl mx-auto text-center mb-40 px-10 pt-16'>
				<img
					src='/assets/logo.svg'
					alt='logo image'
					className='mx-auto my-16'
				/>
			</div>
		</section>
	);
}
