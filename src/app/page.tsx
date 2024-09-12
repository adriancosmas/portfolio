import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PostCard } from "@/components/PostCard";
import Link from "next/link";
import HomeGrid from "@/components/HomeGrid";
import Image from "next/image";
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: "Cosmas Adrian - Frontend Developer & Graphic Designer",
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
    // limit: 3,
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  })

  return (
    <>
      <HomeGrid/>

        {/* <section className="flex flex-col gap-8 w-full">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </section> */}

      <div className="flex lg:flex-row flex-col mt-8 gap-8 h-[1000px] lg:h-full md:h-full">
          <div className="relative flex-1 h-[500px] cursor-pointer hover:flex-[3] bg-red-500 transition-all ease-in-out delay-400 rounded-3xl p-4 overflow-hidden">
            <p className="z-[2] absolute bottom-8 bg-white p-4 rounded-xl shadow-md">Tiket Kapal feature on BCA Mobile</p>
            <Image 
              priority
              src="/img/kapal.PNG" 
              alt="Tiket Kapal BCA Mobile Lifestyle"
              fill
              style={{ objectFit:'cover' }}
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw"
              />
          </div>

          <div className="relative flex-1 h-[500px] cursor-pointer hover:flex-[3] bg-red-500 transition-all ease-in-out delay-400 rounded-3xl p-4 overflow-hidden">
            <p className="z-[2] absolute bottom-8 bg-white p-4 rounded-xl shadow-md">Wisata Indonesia feature on BCA Mobile</p>

            <Image 
              priority
              src="/img/wisata.png" 
              alt="Wisata Indonesia BCA Mobile Lifestyle"
              fill
              style={{ objectFit:'cover' }}
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw"
              />
          </div>

          <div className="relative flex-1 h-[500px] cursor-pointer hover:flex-[3] bg-red-500 transition-all ease-in-out delay-400 rounded-3xl p-4 overflow-hidden">
            <p className="z-[2] absolute bottom-8 bg-white p-4 rounded-xl shadow-md">Pelni feature on Mandiri Livin' Sukha</p>

            <Image 
              priority
              src="/img/sukha.png" 
              alt="Pelni feature on Mandiri Livin' Sukha"
              fill
              style={{ objectFit:'cover' }}
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw"
              />
          </div>
      </div>

      <div className="grid grid-flow-row-dense gird-cols-2 gap-8 sm:grid-flow-dense sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8">
          <div className="aspect-square bg-[#FFDC7F] rounded-3xl p-6 flex justify-center items-center">
            <p className="text-6xl text-gray-800 font-semibold">
              Blog
            </p>
          </div>

          <div className="aspect-square overflow-hidden flex">
            <section className="flex flex-col gap-4 w-full overflow-y-scroll">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
            </section>
          </div>
      </div>

      <div className="mt-8 rounded-3xl bg-white px-6 py-10">
        <p className="text-center text-xl lg:text-3xl font-light text-gray-800">I love minimalist, clean, and simple concept. <br/> This is why my website like this, but i do made with love ♥️</p>
      </div>
    </>
  );
}
