import React from 'react';

export default function Features() {
	return (
		<section>
			<div className='section-container mx-0 my-20 px-10'>
				<div className='relative flex flex-col md:flex-row md:space-x-32 md:text-left md:items-start md:w-full'>
					<div className='md:w-1/2'>
						<img
							src='/assets/image-computer.png'
							alt='image with IMac-PC'
							className='mx-auto md:absolute md:top-10 md:right-[50%]'
						/>
					</div>
					<div className='flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16'>
						<div className='flex flex-col items-center md:items-start'>
							<h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>
								Quick Search
							</h5>
							<p className='min-w-md text-grayishBlue'>
								Easily search your snippets by content, category, web address,
								application, and more.
							</p>
						</div>
						<div className='flex flex-col items-center md:items-start'>
							<h5>iCloud Sync</h5>
							<p className='min-w-md text-grayishBlue'>
								Instantly saves and syncs snippets across all your devices.
							</p>
						</div>
						<div className='flex flex-col items-center md:items-start'>
							<h5>Completely History</h5>
							<p className='min-w-md text-grayishBlue'>
								Retrieve any snippets from the first moment you started using
								the app.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
