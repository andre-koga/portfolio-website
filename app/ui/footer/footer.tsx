import HoverSocials from "@/app/ui/footer/hover-socials";

export default async function Footer() {
  return (
    <>
      <HoverSocials />
      <footer className="flex flex-col items-center gap-4 border-t border-mid bg-darky pt-4 md:gap-8 md:pt-8">
        <p>&quot;never satisfied, forever tinkering&quot;</p>
        <div className="flex w-full items-center p-2 text-light md:p-4">
          <p>© 2023</p>
          <div className="mx-2 h-0.5 flex-grow rounded-full bg-lighty" />
          <p>(●&apos;◡&apos;●)</p>
        </div>
      </footer>
    </>
  );
}
