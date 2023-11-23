"use client";

import { use, useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaItchIo } from "react-icons/fa";

interface SocialLink {
  href: string;
  icon: any;
  color: string;
}

let links: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/andrehkoga/",
    icon: FaLinkedin,
    color: "#0e76a8",
  },
  {
    href: "https://github.com/andre-koga",
    icon: FaGithub,
    color: "#333",
  },
  {
    href: "https://www.instagram.com/kogadraws/",
    icon: FaInstagram,
    color: "#C13584",
  },
  {
    href: "https://andrekoga.itch.io/",
    icon: FaItchIo,
    color: "#fa5b5b",
  },
];

interface FooterFact {
  id: number;
  description: string;
}

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3000";

export default function Footer() {
  // Define a state variable "items" and a function "setItems" to update the state
  const [facts, setFacts] = useState<FooterFact[]>([]);
  const [id, setId] = useState(0);

  // Use the useEffect hook to fetch data from the API endpoint when the component mounts
  useEffect(() => {
    fetch(`${SERVER_URL}/api/footer_facts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Set the request headers to indicate JSON format
      },
    })
      .then((res) => res.json()) // Parse the response data as JSON
      .then((data) => setFacts(data));
  }, []);

  useEffect(() => {
    generateFact();
  }, [facts]);

  const generateFact = () => {
    let newId;
    do {
      newId = Math.floor(Math.random() * facts.length);
    } while (newId === id && facts.length > 1);
    setId(newId);
  };

  return (
    <>
      <div className="pointer-events-none sticky bottom-0">
        <div className="flex justify-center gap-2 py-2">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                className="nav-no-highlight pointer-events-auto flex items-center gap-2 rounded border-2 p-0.5 px-4 text-center text-xl font-bold text-white"
                href={link.href}
                key={i}
                style={{
                  borderColor: link.color,
                  backgroundColor: link.color,
                }}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
      <footer className="flex flex-col items-center gap-4 bg-black pt-4 text-primary md:gap-8 md:pt-8">
        {facts.length > 0 && (
          <p className="mx-4 text-center text-sm">{facts[id].description}</p>
        )}
        {facts.length == 0 && (
          <p className="mx-4 text-center text-sm italic text-neutral-400">
            ...loading facts...
          </p>
        )}
        <button
          onClick={generateFact}
          className="rounded border px-2 text-sm uppercase md:text-base"
        >
          fun-fact-generator-3000!
        </button>
        <div className="flex w-full items-center border-t border-gray-700 p-2 pt-4 md:p-4">
          <p>© 2023</p>
          <div className="mx-2 h-1 flex-grow rounded-full bg-primary" />
          <p>(●&apos;◡&apos;●)</p>
        </div>
      </footer>
    </>
  );
}
