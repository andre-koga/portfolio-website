import Link from "next/link";
import HeaderSlogan from "@/app/ui/header/header-slogan";

export default function Page() {
  return (
    <main className="grid gap-4">
      <HeaderSlogan
        slogan={["Words are a lens to focus one's mind"]}
        color="darkorchid"
      />
      <Link
        href="/projects/ideas"
        className="mx-auto rounded border border-mid px-2 text-sm text-light transition-colors hover:border-light"
      >
        Unfinished posts here!
      </Link>
    </main>
  );
}
