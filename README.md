# What is this?

- This repo serves a dual purpose. First and foremost, it is a sandbox for me to learn NextJS and Typescript a little better. The goal is for me to utilize the CI/CD deployment practices I use at work to create a scalable website using modern frameworks. The second purpose is simply just for me to have a place to put my blog, and advertise my YouTube Channel.

- You will (knowing me) probably notice the website has very little styling done. This is intentional. I hate CSS, and the intention for this website is to practice Typescript and utilizing NextJS. If I do end up deciding to add styling outside of simple styling like CSS Grid or something, it is probably AI as I cannot be bothered to do so. 

# Project Architecture

- This repo is divided into two main sections:
    1. Main Portfolio Page
        - src/app/page.tsx
        This route serves as the index page for my portfolio, and define the central hub for information.
    2. Blog
        - src/app/blog/page.tsx
        - src/app/blog/[slug]/page.tsx
        These two files define the blog portion of the website. I am using mdx in order to write my blogs, and utilizing NextJS' dynamic routing to specify the pages. `blog/page.tsx` outlines what the main blog page looks like. I envision this as a simple list of all my blogs that I've made with clickable links. `blog/[slug]/page.tsx` is a cookie-cutter page that displays each blog. Each blog is required to have a title, description, date, and content. This page just organizes it and displays it to the end user. NextJS's dynamic routing takes care of the paths, so that I dont have to specify one for each blog post.

# Dependencies

- Check the package.json... I'm to lazy to list them out here.

# Steps to run locally

- I'm honestly not sure why you want to run this locally. This personal website is not a good example of what to copy, and is onyl for expanding my personal skillset. Though, if you are still reading, check below for steps:

1. Ensure you have all the dependencies
2. Clone the repo
3. cd into repo
4. run `npm run dev`
