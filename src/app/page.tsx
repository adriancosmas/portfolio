import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PostCard } from "@/components/PostCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import HomeGrid from "@/components/HomeGrid";
import { InfiniteSlider } from "@/components/InfiniteSlider";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getByUID("page", "home");

  const posts = await client.getAllByType('page', {
    fetchOptions: {
      cache: 'no-store',
      next: { tags: ['prismic', 'page'] },
    },
    limit: 3,
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  })

  return (
    <>
      {/* <div className="w-full rounded-3xl bg-white mb-8 lg:h-[calc(100vh-50px)] h-[calc(100vh-50px)] overflow-hidden p-6">

        <div className="max-w-[768px] flex justify-center items-center flex-col h-full mx-auto">
          <p className="mb-4 font-light">Hello! Cosmas here.</p>
          <h1 className="font-semibold text-gray-800 text-4xl lg:text-6xl text-center">Frontend Developer & Graphic Designer based in Indonesia</h1>   

          <div className="flex flex-row gap-8 mt-8">
            <button className=" bg-[#FFDC7F] px-6 py-2 rounded-md hover:bg-gray-800 hover:text-[#FFDC7F] ease-in-out delay-100 transition-all">Contact</button>
            <Link href="https://read.cv/adriancosmas" className="border border-[#FFDC7F] px-6 py-2 rounded-md hover:border-gray-800 hover:text-[#FFDC7F] ease-in-out delay-100 transition-all">Read CV</Link>
          </div>
        </div>
       
      </div> */}

      <HomeGrid/>

        {/* <section className="flex flex-col gap-8 w-full">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </section> */}

      <div className="flex lg:flex-row flex-col mt-8 gap-8 h-full">
          <div className="flex-1 h-[500px] cursor-pointer hover:flex-[3] bg-red-500 transition-all ease-in-out delay-400 rounded-3xl p-4">
            <p>Long text is here. i don't know what happern</p>
          </div>

          <div className="flex-1 h-[500px] cursor-pointer hover:flex-[3] bg-blue-500 transition-all ease-in-out delay-400 rounded-3xl"></div>
          <div className="flex-1 h-[500px] cursor-pointer hover:flex-[3] bg-green-500 transition-all ease-in-out delay-400 rounded-3xl"></div>
      </div>

      <section className="flex flex-col gap-4 w-full mt-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </section>

    </>
  );
}
