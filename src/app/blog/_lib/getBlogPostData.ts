import { notFound } from "next/navigation";
import { BlogPostData } from "@/types/blog/types";

export async function getBlogPostMetaData(slug: string): Promise<BlogPostData>{
    try{
        const mdxFile = await import(`@/app/blog/posts/${slug}.mdx`);

        if(mdxFile?.metadata){
            if(!mdxFile.metadata.title || !mdxFile.metadata.description || !mdxFile.metadata.date) {
                throw new Error("The post lacks a title, description, or date property in the metadata!")
            }
            
            return {
                slug: slug,
                metadata: { title: mdxFile.metadata.title, 
                            description: mdxFile.metadata.description
                },
                datePosted: mdxFile.metadata.date,
            } as BlogPostData
        }
        else {
            throw new Error("Unable to find metadata for " + slug + ".mdx");
        }

    } catch (error: any){
        console.error(error?.message);
        return notFound();
    }
}