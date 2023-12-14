const ideas: string[] = [
  "Dynamic number information calculator",
  "0-player game with emerging behavior",
  "shareable interactive deck of cards through website",
  "collectively created graph of words-connection",
];

export default function Page() {
  return (
    <main>
      <h2 className="m-2 text-center text-xl uppercase">Ideas:</h2>
      <ul className="m-2 grid gap-2 rounded border border-mid py-20">
        {ideas.map((idea, i) => (
          <li className="px-2 text-center lowercase text-lighty" key={i}>
            <p>{i + 1 + " -> " + idea}</p>
          </li>
        ))}
        <li className="px-2 text-center lowercase text-lighty">
          <p className="italic">...more to come...</p>
        </li>
      </ul>
    </main>
  );
}
