// ./src/components/PostCard.tsx

import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { RichText } from "./RichText";
import { Content } from "@prismicio/client";

export const TagsCard = ({
  post,
}: {
  post: Content.PageDocument;
}): JSX.Element => {
  const { data } = post;

  console.log('POST CARD', data)

  return (
    <PrismicLink document={post}>
      <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-4">
        <div className="flex flex-col gap-1">

          <p className="text-sm text-slate-700 w-min pb-1">
            {new Date(data?.date || "").toLocaleDateString()}
          </p>

          <div className="hover:opacity-75 duration-300 ease-in-out transition-all">
            <h2 className="font-bold text-xl">
              <PrismicText field={data.title} />
            </h2>
          </div>
        </div>
        <RichText field={data.description} />
      </div>
    </PrismicLink>
  );
};