import { Suspense } from "react";
import FooterFacts from "@/app/ui/footer/footer-facts";
import HoverSocials from "@/app/ui/footer/hover-socials";

export default async function Footer() {
  return (
    <>
      <HoverSocials />
      <footer className="bg-dark border-mid flex flex-col items-center gap-4 border-t pt-4 md:gap-8 md:pt-8">
        {/* <Suspense fallback={<p>Loading...</p>}>
          <FooterFacts />
        </Suspense> */}
        <div className="flex w-full items-center p-2 pt-4 md:p-4">
          <p>© 2023</p>
          <div className="bg-mid mx-2 h-0.5 flex-grow rounded-full" />
          <p>(●&apos;◡&apos;●)</p>
        </div>
      </footer>
    </>
  );
}
