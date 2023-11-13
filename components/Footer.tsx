"use client";

import { useEffect, useState } from "react";
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

const facts = [
  "The first computer programmer was a woman named Ada Lovelace.",
  "The first computer game was created in 1961.",
  "The first computer virus was created in 1983.",
  "The first domain name ever registered was Symbolics.com.",
  "The programming language 'Python' is named after the television show 'Monty Python’s Flying Circus' and has nothing to do with reptiles.",
  "More than 80% of the emails sent daily are spams.",
  "The first microprocessor created by Intel was the 4004. It was designed for a calculator, and in that time nobody imagined where it would lead.",
  "The original name of Windows was Interface Manager.",
  "The first known cell phone was created in 1973 by Motorola. It was 1.1 kg and was 23 cm long.",
  "The first actual computer “bug” was a dead moth which was stuck in a Harvard Mark II computer in 1947.",
  "There are approximately 6000 new viruses released every month.",
  "The average computer user blinks 7 times a minute, less than half the normal rate of 20.",
  "The house where Bill Gates lives was designed using a Macintosh computer.",
  "CAPTCHA is an acronym for 'Completely Automated Public Turing test to tell Computers and Humans Apart'.",
  "The first high-level (very close to real English that we use in our day-to-day life) programming language was FORTRAN. It was invented at IBM in 1957.",
  "The first machine to ever beat a chess grandmaster was a computer called Deep Blue, it defeated Garry Kasparov in 1997.",
  "The first ever VCR, which was made in 1956, was the size of a piano.",
  "The radio took 38 years to reach a market audience of 50 million. The television took 13 years and the iPod only took 3 years to reach a market audience of 50 million.",
  "The first Apple logo featured Sir Isaac Newton.",
  "Email has been around longer than the World Wide Web.",
  "The first banner advertising was used in 1994.",
  "1 in 8 married couples actually met each other on the Internet.",
  "There are approximately 1.06 billion instant messaging accounts worldwide.",
  "The 'http' part of a web address stands for 'HyperText Transfer Protocol'.",
  "The 'www' part of a web address stands for 'World Wide Web'.",
  "The '.com' part of a web address stands for 'commercial'.",
  "The first alarm clock could only ring at 4am.",
  "The first camera took eight hours to snap a photo.",
  "The world's first 1GB drive was announced in 1980. It weighed 550 pounds and had a price tag of $40,000.",
  "The password for the computer controls of nuclear-tipped missiles of the U.S was 00000000 for eight years.",
  "NASA's first computers were women. Before the first machine computers were built, 'computers' were human beings who did the calculations manually.",
  "The first ever hard disk drive was made in 1979, and could hold only 5MB of data.",
  "The first mouse was invented by Doug Engelbart in around 1964 and was made of wood.",
  "The QWERTY keyboard layout was used in early typewriters to slow down the typing speed and prevent the machine from jamming.",
  "The first website (http://info.cern.ch) is still online. It was put online on August 6, 1991.",
  "The first webcam was used at the University Of Cambridge to monitor a coffee pot.",
];

export default function Footer() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    generateFact();
  }, []);

  const generateFact = () => {
    let newFact;
    do {
      const randomIndex = Math.floor(Math.random() * facts.length);
      newFact = facts[randomIndex];
    } while (newFact === fact);
    setFact(newFact);
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
        {fact && <p className="mx-4 text-center text-sm">{fact}</p>}
        <button
          onClick={generateFact}
          className="rounded border px-2 text-sm uppercase md:text-base"
        >
          fun-fact-generator-3000!
        </button>
        <div className="flex w-full items-center border-t border-gray-700 p-2 pt-4 md:p-4">
          <p>© 2023</p>
          <div className="mx-2 h-1 flex-grow rounded-full bg-primary" />
          <p>(●'◡'●)</p>
        </div>
      </footer>
    </>
  );
}
