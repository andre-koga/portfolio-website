import { GetPost } from "@/app/lib/actions";
import { post } from "@/app/lib/definitions";
import DisplayPost from "@/app/ui/blog/display-post";

export const revalidate = 0;

export default async function Page({ params }: { params: { slug: string } }) {
  const post: post = await GetPost(params.slug);

  return <DisplayPost post={post} />;
}
