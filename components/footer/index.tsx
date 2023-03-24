import React from 'react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='bg-gray-50 px-10'>
			<div className='section-container'>
				<div className='flex flex-col items-center justify-between md:flex-row'>
					<img src='/assets/logo.svg' alt='' className='scale-50' />
					<div className='flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue'>
						<div className='flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0'>
							<div className='flex flex-col space-y-4 text-center md:text-left'>
								<div>
									<Link href='#' className='hover:text-strongCyan'>
										FAQs
									</Link>
								</div>
								<div>
									<Link href='#' className='hover:text-strongCyan'>
										Contact Us
									</Link>
								</div>
							</div>
							<div className='flex flex-col space-y-4 text-center md:text-left'>
								<div>
									<Link href='#' className='hover:text-strongCyan'>
										Privacy Policy
									</Link>
								</div>
								<div>
									<Link href='#' className='hover:text-strongCyan'>
										Press Kit
									</Link>
								</div>
							</div>
							<div className='flex flex-col space-y-4 text-center md:text-left'>
								<div>
									<Link href='#' className='hover:text-strongCyan'>
										Install Guide
									</Link>
								</div>
							</div>
						</div>
						<div className='flex justify-between w-32 py-1'>
							<Link href='#'>
								<img
									src='/assets/icon-facebook.svg'
									alt=''
									className='duration-200 ficon'
								/>
							</Link>
							<Link href='#'>
								<img
									src='/assets/icon-twitter.svg'
									alt=''
									className='duration-200 ficon'
								/>
							</Link>
							<Link href='#'>
								<img
									src='/assets/icon-instagram.svg'
									alt=''
									className='duration-200 ficon'
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
