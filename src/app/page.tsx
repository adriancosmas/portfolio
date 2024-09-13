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
import styles from './app.module.css'
import App from "next/app";

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

      <div className={ styles.project__container }>
          <div className={ styles.project__content }>
            <div className={ styles.project__content__imageContainer }>
              <Image 
                className={ styles.project__content__image }
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

            <p className={ styles.project__content__title }>
              Tiket Kapal feature on BCA Mobile
            </p>
          </div>

          <div className={ styles.project__content }>
            <div className={ styles.project__content__imageContainer }>
              <Image 
                className={ styles.project__content__image }
                priority
                src="/img/wisata.PNG" 
                alt="Wisata Indonesia BCA Mobile Lifestyle"
                fill
                style={{ objectFit:'cover' }}
                sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                33vw"
              />
            </div>

            <p className={ styles.project__content__title }>
              Wisata Indonesia feature on BCA Mobile
            </p>
          </div>

          <div className={ styles.project__content }>
            <div className={ styles.project__content__imageContainer }>
              <Image 
                className={ styles.project__content__image }
                priority
                src="/img/sukha.PNG" 
                alt="Pelni feature on Mandiri Livin' Sukha"
                fill
                style={{ objectFit:'cover' }}
                sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                33vw"
              />
            </div>

            <p className={ styles.project__content__title }>
              Pelni feature on Mandiri Livin' Sukha
            </p>
          </div>
      </div>

      <div className="grid grid-flow-row-dense gird-cols-2 gap-8 sm:grid-flow-dense sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8">
          <div className={ styles.blog__content }>
            <div className={ styles.blog__content__header }/>

            <div className={ styles.blog__content__container }>
              <p className={ styles.blog__content__title }>
                Blog
              </p>

              <p className={ styles.blog__content__subtitle }>
                Some content or my cheatsheet about programming
              </p>
            </div>
          </div>

          <div className={ styles.blog__content__flex }>
            <section className={ styles.blog__section }>
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
            </section>
          </div>
      </div>

      <div className={ styles.footer__container }>
        <p className={ styles.footer__content }>
          I love minimalist, clean, and simple concept. 
          <br/> This is why my website like this, but i do made with love

          <span className={ styles.footer__content__heart }>
            ♥️
          </span>
        </p>
      </div>
    </>
  );
}
