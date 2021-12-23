import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

//파일시스템을 통해서 데이터를 가져오는 함수를 생성하였다.
//이 부분은 pre-rendering의 개념을 설명하기 위한 부수적인 내용일 수 있다.
//간단하게 데이터를 가져오는 부분이라고 생각하고 pre-rendering에 초점을 맞추고 살펴보는 것을 우선순위로 두자!
//아래 코드의 자세한 내용은 다음기회에...

export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			...matterResult.data,
		};
	});
	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}
