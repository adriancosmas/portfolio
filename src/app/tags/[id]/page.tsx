// app/tags/[id]/page.tsx (or the appropriate file path based on your routing setup)

import { createClient } from "@/prismicio";
import * as prismic from '@prismicio/client';
import Link from "next/link";

// Define the type for Prismic Page Document
type PageDocument = prismic.PrismicDocument<Record<string, any>> & {
  data: {
    title: { text: string }[];
    // Define other fields based on your Prismic schema
  };
};

interface TagsProps {
  params: {
    id: string;
  };
}

const Tags = async ({ params }: TagsProps) => {
  const client = createClient();

  // Fetch pages with specific tags
  const response = await client.get({
    predicates: [
      prismic.predicate.any('document.tags', [`${params.id}`]),
      prismic.predicate.at('document.type', 'page'),
    ],
    pageSize: 100, // Adjust if needed
  });

  const pages = response.results as PageDocument[];

  if (!pages.length) {
    return <p>No pages found.</p>;
  }

  return (
    <>
        <h1>{params.id}</h1>
        
        {pages.map((page) => (
            <Link href={`/${page.uid}`} key={page.id}>
                <p>{page.data.title[0]?.text || 'No title available'}</p>
                <p>{page.data.description[0]?.text || 'No title available'}</p>
            </Link>
        ))}
    </>
  );
};

export default Tags;
