import HoverSocials from "@/app/ui/footer/hover-socials";

export default async function Footer() {
  return (
    <>
      <HoverSocials />
      <footer className="bg-darky flex flex-col items-center gap-4 border-t border-mid pt-4 md:gap-8 md:pt-8">
        <p>"never satisfied, forever tinkering"</p>
        <div className="flex w-full items-center p-2 text-light md:p-4">
          <p>© 2023</p>
          <div className="bg-lighty mx-2 h-0.5 flex-grow rounded-full" />
          <p>(●&apos;◡&apos;●)</p>
        </div>
      </footer>
    </>
  );
}
