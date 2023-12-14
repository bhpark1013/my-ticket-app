import { sql } from "@vercel/postgres";

export async function findReserve() {
  return sql`select reservation.id,gym_time.start_datetime, gym.name, gym.coordinate_x as x, 
  gym.coordinate_y as y
   from reservation join gym_time on gym_time.id = reservation.gym_time_id
  join gym on gym.id = gym_time.gym_id`;
}

export async function GET(request: Request) {
  const res = await findReserve();
  return Response.json({ res });
}
