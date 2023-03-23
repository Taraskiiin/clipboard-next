import Head from 'next/head';
import { Bai_Jamjuree } from 'next/font/google';

export const baiJamjuree = Bai_Jamjuree({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

import Hero from '@/components/hero';
import Snippets from '@/components/snippets';
import Features from '@/components/features';

export default function Home() {
	return (
		<>
			<Head>
				<title>Clipboard</title>
			</Head>
			<main className={baiJamjuree.className}>
				<Hero />
				<Snippets />
				<Features />
			</main>
		</>
	);
}
