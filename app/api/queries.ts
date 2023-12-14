import { sql } from "@vercel/postgres";

const fetchPlaces = async () => {
  console.log({
    POSTGRES_URL: process.env.POSTGRES_URL,
  });
  const result = await sql`select * from gym`;

  console.log(result.rows);
  return result.rows;
};
// fetchPlaces();

export default fetchPlaces;

// export default async function handler(req, res) {
//   try {
//     const result = await fetchPlaces();
//     res.status(200).json({ result });
//   } catch (error) {
//     res.status(500).json({ message: "Error executing SQL query", error });
//   }
// }
