'use client';

import '../lib/i18n'
import { useTranslation } from 'react-i18next';

export default function Home() {
	const { t, i18n } = useTranslation();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8 sm:p-20 text-white font-[family-name:var(--font-geist-sans)]">
			<div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-10 shadow-lg">

				<h1 className="text-4xl font-bold mb-4 text-black">{t('welcome')}</h1>
				<p className="text-lg mb-8 text-black">{t('description')}</p>

				<div className="flex space-x-4">
					<button 
						className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-full transition duration-300 cursor-pointer"
						onClick={() => i18n.changeLanguage('ja')}
						title="Japanese"
					>
						日本語
					</button>
					<button 
						className="px-4 py-2 bg-green-700 hover:bg-green-800 rounded-full transition duration-300 cursor-pointer"
						onClick={() => i18n.changeLanguage('zh')}
						title="Chinese"
					>
						中文
					</button>
					<button 
						className="px-4 py-2 bg-red-700 hover:bg-red-800 rounded-full transition duration-300 cursor-pointer"
						onClick={() => i18n.changeLanguage('en-US')}
						title="English"
					>
						English
					</button>
				</div>
			</div>
		</div>
	);
}
