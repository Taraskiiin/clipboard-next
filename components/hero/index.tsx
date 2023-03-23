import React from 'react';

import Link from 'next/link';

export default function Hero() {
	return (
		<section className='flex justify-center'>
			<div className='section-container mb-40 px-10 pt-16'>
				<img
					src='/assets/logo.svg'
					alt='logo image'
					className='mx-auto my-16'
				/>
				<h3>A history of everything you copy</h3>
				<p className='max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue'>
					Clipboard allows you to track and organize everything you copy.
					Instantly access your clipboard on all your devices.
				</p>
				<div className='button-container'>
					<Link
						href='#'
						className='p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80'
					>
						Download for iOS
					</Link>
					<Link
						href='#'
						className='p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80'
					>
						Download for Mac
					</Link>
				</div>
			</div>
		</section>
	);
}
