import { readdir } from 'node:fs/promises'

const blogsPath = "/home/micha/portfolio/src/app/blog/posts"

export async function getBlogNames(){
    const blogNames = await readdir(blogsPath);

    return blogNames.map((blogName) => blogName.replace(".mdx", ""));
}
