import React from 'react';

export default function Supercharge() {
	return (
		<section>
			<div className='section-container my-20  px-10'>
				<h3>Supercharge your workflow</h3>
				<p className='max-w-3xl mx-auto text-grayishBlue mb-16 text-xl'>
					We've got the tools to boost your productivity.
				</p>
				<div className='flex flex-col items-center justify-between space-y-16 md:flex-row md:items-start md:space-y-0 md:space-x-12'>
					<div className='flex flex-col items-center space-y-5 pt-6 relative'>
						<img
							src='assets/icon-blacklist.svg'
							alt=''
							className='absolute top-0'
						/>
						<h5>Create Blacklists</h5>
						<p className='max-w-md text-grayishBlue'>
							Easily search your snippets by content, category, web address,
							application, and more.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-5  pt-6 relative'>
						<img src='assets/icon-text.svg' alt='' className='absolute top-0' />
						<h5>Plain Text Snippets</h5>
						<p className='max-w-md text-grayishBlue'>
							Remove unwanted formatting from copied text for a consistent look.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-5 pt-6 relative'>
						<img
							src='assets/icon-preview.svg'
							alt=''
							className='absolute top-0'
						/>
						<h5>Sneak Preview</h5>
						<p className='max-w-md text-grayishBlue'>
							Quick preview of all snippets on your Clipboard for easy access.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
