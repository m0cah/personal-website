import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getBlogPostMetaData } from "@/app/blog/_lib/getBlogPostData";
import { BlogPageProps } from "@/types/blog/types";

export async function generateMetadata({params}: BlogPageProps): Promise<Metadata>{
    const {slug} = await params;
    const { metadata }  = await getBlogPostMetaData(slug);

    if(metadata){
        return metadata;
    }
    else{
        throw new Error("No metadata found for " + slug + ".mdx");
    }

}

export default async function BlogPage({params}: BlogPageProps){

    const { slug } = await params;

    const { metadata, datePosted } = await getBlogPostMetaData(slug);

    const title = `${metadata.title ?? ""}`;
    const description = `${metadata.description ?? ""}`;
    const date = `${datePosted ?? ""}`;

    const BlogPost = dynamic(() => import(`@/app/blog/posts/${slug}.mdx`))

    return(<>
            <h1>{title} - {date}</h1>
            <p>{description}</p>
            <BlogPost/>
    </>
    );
}