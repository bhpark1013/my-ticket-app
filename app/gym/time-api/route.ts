import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

const fetchTimes = (placeId: number) =>
  sql`select * from gym_time where gym_id = ${placeId} order by start_datetime asc`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetchTimes(Number(id));

  return NextResponse.json({ res });
}
