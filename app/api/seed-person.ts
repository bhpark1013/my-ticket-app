import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const results = await sql`insert into person (name) VALUES ('어르신');`;
    return response.status(200).json({ result: results });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
