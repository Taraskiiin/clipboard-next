import React from 'react';
import Link from 'next/link';

export default function Bottom() {
	return (
		<section className='px-10 mb-24'>
			<div className='section-container my-20'>
				<h3>Clipboard for iOS and MacOS</h3>
				<p className='section-content mb-10 text-xl'>
					Available for free on the App Store. Download for Mac or iOS, sync
					with iCloud and you're ready to start adding to your clipboard.
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
