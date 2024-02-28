import Link from "next/link";
import HeaderSlogan from "@/app/ui/header/header-slogan";
import { GetAllPosts } from "@/app/lib/actions";
import { PortableText } from "@portabletext/react";
import { formatDate } from "@/app/lib/utils";

export default async function Page() {
  const posts = await GetAllPosts();

  return (
    <main className="grid gap-4">
      <HeaderSlogan
        slogan={["Words are a lens to focus one's mind"]}
        color="darkorchid"
      />
      {/* <Link
        href="/blog/unfinished"
        className="mx-auto rounded border border-mid px-2 text-sm text-light transition-colors hover:border-light"
      >
        Unfinished posts here!
      </Link> */}
      <nav className="m-2 grid gap-4">
        {posts
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime(),
          )
          .map((post, i) => (
            <Link key={i} href={`/blog/${post.slug.current}`}>
              <div className="prose prose-slate prose-invert mx-auto rounded border border-mid bg-darky p-2 text-justify transition-colors hover:border-light sm:p-4">
                <h2 className="text-center text-2xl font-light uppercase">
                  {post.title}
                </h2>
                <p>{post.excerpt}</p>
                <p className="text-center">
                  <time className="text-xs text-lighty">
                    Last edited at {formatDate(new Date(post.publishedAt))}
                  </time>
                </p>
              </div>
            </Link>
          ))}
      </nav>
    </main>
  );
}
