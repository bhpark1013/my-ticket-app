import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

async function insertReservation(gym_time_id: number, user_id: number) {
  return Promise.all([
    sql`insert into reservation (gym_time_id, user_id) values (${gym_time_id}, ${user_id})`,
    sql`update gym_time set current = current + 1 where id = ${gym_time_id}`,
  ]);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gym_time_id = searchParams.get("gym_time_id");
  const user_id = searchParams.get("user_id");
  const res = await insertReservation(Number(gym_time_id), Number(user_id));

  return NextResponse.json({ res });
}
