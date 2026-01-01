
'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import PageCard from "@/components/PageCard"
import { title } from "process";
import Blog from "./blog/page";

export default function Home() {

  const pageInfo = {  //Kinda cringe. Dont want to perform async operation and make it a server component for SEO purposes, and dont wanna make another config, thus we are here...
    blog: {
      title: "Blog",
      description: "Short, concise blogs about life of being a Software Engineer and Graduate Student :D",
      link: "/blog",
      imagePath: "/blog.jpeg",
    },
    resume: {
      title: "My Resume",
      description: "Do I really need to tell you what my resume is?",
      link: "/resume",
      imagePath: "/resume.png",
    },
    youtube: {
      title: "My Youtube (pls sub)",
      description: "As of yet, no videos, but plan on making intro CS videos to lower the barrier to entry.",
      link: "https://www.youtube.com/@mjn-hokie",
      imagePath: "/youtube.png",
    }
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1>Michael Neal</h1>
        <h3>Student | Software Engineer | Yapper</h3>
      </div>
      
      <div className={styles.cardContainer}>
        {Object.values(pageInfo).map((pageCardProps, index) => <PageCard
                                                                  title={pageCardProps.title}
                                                                  description= {pageCardProps.description}
                                                                  link={pageCardProps.link}
                                                                  imagePath={pageCardProps.imagePath}
                                                                  key={index}/>) }
      </div>
    </div>
  );


}
