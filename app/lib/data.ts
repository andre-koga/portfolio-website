import { sql } from "@vercel/postgres";
import { FactRaw } from "@/app/lib/definitions";

export async function fetchFooterFacts() {
  try {
    const data = await sql<FactRaw>`SELECT * FROM footer_facts`;

    const facts = data.rows.map((fact) => ({
      ...fact,
    }));

    return {
      facts,
    };
  } catch (error) {
    console.log("Footer Facts Error: ", error);
    throw new Error("Failed to fetch footer facts data");
  }
}
