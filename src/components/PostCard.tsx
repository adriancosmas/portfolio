// ./src/components/PostCard.tsx

import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { RichText } from "./RichText";
import { Content } from "@prismicio/client";

export const PostCard = ({
  post,
}: {
  post: Content.PageDocument;
}): JSX.Element => {
  const { data } = post;

  console.log('POST CARD', data)

  return (
    <PrismicLink document={post}>
      <div className="flex flex-col gap-2 rounded-xl p-6 bg-white flex-1 font-oak">
        <div className="flex flex-col gap-1">

          <p className="text-sm text-slate-700 w-min pb-1 font-oak">
            {new Date(data?.date || "").toLocaleDateString()}
          </p>

          <div className="hover:opacity-75 duration-300 ease-in-out transition-all">
            <h2 className="font-bold text-xl font-oak">
              <PrismicText field={data.title} />
            </h2>
          </div>
        </div>

        <div className="whitespace-normal break-all">
          <RichText field={data.description} />
        </div>
      </div>
    </PrismicLink>
  );
};