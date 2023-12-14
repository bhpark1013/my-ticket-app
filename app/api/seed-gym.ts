import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    // const gym =
    // {
    //     id: 1,
    //     remain: "10/40",
    //     position: { lat: 37.55663602596717, lng: 127.0457001269887 },
    //     name: "포켓몬게이트볼",
    //   },
    const results = await Promise.all(
      [
        {
          id: 1,
          remain: "10/40",
          position: { lat: 37.55663602596717, lng: 127.0457001269887 },
          name: "포켓몬게이트볼",
        },
        {
          id: 2,
          remain: "10/40",
          position: { lat: 37.55, lng: 127.04 },
          name: "행복게이트볼",
        },
        {
          id: 3,
          remain: "10/40",
          position: { lat: 37.56, lng: 127.05 },
          name: "평범한게이트볼",
        },
        {
          id: 4,
          remain: "10/40",
          position: { lat: 37.545, lng: 127.054 },
          name: "그냥게이트볼",
        },
      ].map((gym) => {
        return sql`insert into gym (coordinate_x, coordinate_y, name) VALUES (${gym.position.lat}, ${gym.position.lng}, ${gym.name});`;
      })
    );
    // console.log(sqlString);
    // const result =
    //   await sql`insert into gym (coordinate_x, coordinate_y, name) VALUES (${gym.position.lat}, ${gym.position.lng}, ${gym.name});`;
    return response.status(200).json({ result: results });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
