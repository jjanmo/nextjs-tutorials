import Head from 'next/head';
import Layout, { siteTitle, name } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from './../lib/post';

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hello My name is {name} <br /> Welcome my first next.js tutorials page
				</p>
				<p>
					{' '}
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	//모든 데이터를 받아온다

	return {
		props: {
			//props가 위의 페이지(Home 컴퍼넌트로 전달됨)
			allPostsData,
		},
	};
}
