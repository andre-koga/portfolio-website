import { GetPost } from "@/app/lib/actions";
import { post } from "@/app/lib/definitions";
import { formatDate, urlFor } from "@/app/lib/utils";
import HeaderSlogan from "@/app/ui/header/header-slogan";
import { PortableText } from "@portabletext/react";

export const revalidate = 0;

export default async function Page({ params }: { params: { slug: string } }) {
  const post: post = await GetPost(params.slug);

  return (
    <article>
      <HeaderSlogan slogan={[post.title]} color="white" />
      <div className="prose prose-slate prose-invert m-2 rounded bg-darky p-2 text-justify prose-headings:text-center sm:mx-auto sm:my-4 sm:p-4">
        <PortableText value={post.body} />
        <p className="text-center">
          <time className="text-xs text-lighty">
            Last edited at {formatDate(new Date(post.publishedAt))}
          </time>
        </p>
      </div>
    </article>
  );
}
