// ./src/app/blog/[uid]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { RichText } from "@/components/RichText";

import '../styles.css'
import Link from "next/link";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();

  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  // Fetch the current blog post page being displayed by the UID of the page
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  // Destructure out the content of the current page
  const { slices, title, date, description } = page.data;

  // console.log(page)

  return (
    <div className="flex flex-col gap-12 w-full max-w-3xl">

      {/* Display the "hero" section of the blog post */}
      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-6">
            <p className="pb-1">
              {new Date(date || "").toLocaleDateString()}
            </p>

            <div>
              <RichText field={title} />
            </div>
          </div>

          <div>
            <RichText field={description} />
          </div>

        </div>
      </section>

      {/* Display the content of the blog post */}
      <>
      <SliceZone slices={slices} components={components} />

      </>

      <div>
        { page?.tags.map((o,index) => (
          <Link key={index} href={`/tags/${o}`}>{o}</Link>
        ))
        }
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("page");

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}