import HeaderSlogan from "@/app/ui/header/header-slogan";
import Image from "next/image";

export default function Whois() {
  return (
    <main className="grid gap-4">
      <HeaderSlogan slogan={["Passion ignites greatness"]} color="crimson" />
      <a
        href="https://5hlun88awqk.typeform.com/to/qipNI8gu"
        target="_blank"
        className="mx-auto rounded border border-mid px-2 text-sm text-light transition-colors hover:border-light"
      >
        Wanna talk? Click here!
      </a>
      <div className="my-4">
        <p className="mx-auto px-8 text-justify leading-10 sm:w-3/4 sm:text-xl">
          Hello there! I&apos;m Andre Koga, a 21 years old guy who loves
          technology and is always looking for new things to learn. With a
          Brazilian origin, a Japanese heritage, and a home in the US,
          exploration is my middle name. I&apos;m a computer science student at
          Georgia Tech, and I&apos;ve been working with web development for the
          past 3 years. I&apos;m also a game developer and digital artist. I
          love animals - divided between dogs and cats - and I&apos;m always
          listening to music - half-alive fan.
        </p>
      </div>
    </main>
  );
}
