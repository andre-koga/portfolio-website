import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 flex items-center bg-black p-2 pt-8 text-primary md:mt-16 md:p-4 md:pt-16">
      <p>© 2023</p>
      <div className="mx-2 h-1 flex-grow rounded-full bg-primary" />
      <p>~ why so serious?</p>
    </footer>
  );
}
