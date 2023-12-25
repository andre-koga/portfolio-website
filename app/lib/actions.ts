import { client } from "@/app/lib/utils";
import { post, postExcerpt } from "@/app/lib/definitions";

export async function GetAllPosts(): Promise<postExcerpt[]> {
  const query = `*[_type == "post"]{
    title,
    slug,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..170], "") + "...",
    publishedAt,
    coverImage
  }`;
  const posts = await client.fetch(query, { cache: "no-store" });

  return posts;
}

export async function GetPost(slug: string): Promise<post> {
  const query = `*[_type == "post" && slug.current == "${slug}"]{
    title,
    slug,
    body,
    publishedAt,
    coverImage
  }`;
  const post = await client.fetch(query, { cache: "no-store" });

  return post[0];
}
