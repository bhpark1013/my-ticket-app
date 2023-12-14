import { sql } from "@vercel/postgres";

export async function findTime(gym_time_id: number) {
  return sql`select * from gym_time join gym on gym.id = gym_time.gym_id

  where gym_time.id = ${gym_time_id}`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gym_time_id = searchParams.get("id");
  const res = await findTime(Number(gym_time_id));

  return Response.json({ res });
}
