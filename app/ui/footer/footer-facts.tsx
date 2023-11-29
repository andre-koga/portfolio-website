"use client";

import { useEffect, useState } from "react";
import { fetchFooterFacts } from "@/app/lib/data";

export default async function FooterFacts() {
  const { facts } = await fetchFooterFacts();

  const [ID, setID] = useState<number>(0);

  function generateFact() {
    let newID;
    do {
      newID = Math.floor(Math.random() * facts.length);
    } while (newID === ID);

    setID(newID);
  }

  useEffect(() => {
    generateFact();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-center">
        <span className="font-bold"></span> {facts[ID].fact}
      </p>
      <button
        onClick={generateFact}
        className="rounded border px-2 text-sm uppercase md:text-base"
      >
        fun-fact-generator-3000!
      </button>
    </div>
  );
}
