import { getBlogNames } from "@/app/blog/_lib/mainBlogPageHelper"
import Link from "next/link";
import styles from "./page.module.css";
import { getBlogPostMetaData } from "./_lib/getBlogPostData";
import type { BlogPostData } from "../../types/blog/types";


export default async function Blog(){

    const blogs: string[] = await getBlogNames();
    
    let blogMetadata = await Promise.all(blogs.map(async (blogName) => await getBlogPostMetaData(blogName)));    

    return (<>
            <div className={styles.pageContainer}>
                <h1>Posts</h1>
                {blogMetadata.map((info: BlogPostData, index: number) => <Link href={`/blog/${info.slug}`} key={index}><p>{index+1}. {info.metadata.title as string}</p></Link>)}
            </div>
            </>)
}
