import { Metadata } from "next"

export type BlogPageProps = { params: { slug: string }};

export type BlogPostData = {
    slug: string,
    metadata: Metadata,
    datePosted: string,
}