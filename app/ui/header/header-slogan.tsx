let lines: string[] = ["everything", "koga has", "done so far"];

export default function HeaderSlogan() {
  return (
    <>
      {lines.map((line: string, i: number) => {
        let total = 0;
        for (let t = 0; t < i; t++) {
          total += lines[t].length;
        }
        return (
          <p className="no-ligature text-center" key={i}>
            {line.split("").map((char: string, j: number) => {
              return (
                <span className={"anim-" + (total + j + 1)} key={j}>
                  {char}
                </span>
              );
            })}
          </p>
        );
      })}
    </>
  );
}
