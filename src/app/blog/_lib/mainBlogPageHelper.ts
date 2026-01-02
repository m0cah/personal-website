import { readdir } from 'node:fs/promises'

const blogsPath = `${process.cwd()}/src/app/blog/posts`

export async function getBlogNames(){

    console.log(process.cwd());
    const blogNames = await readdir(blogsPath);

    return blogNames.map((blogName) => blogName.replace(".mdx", ""));
}
