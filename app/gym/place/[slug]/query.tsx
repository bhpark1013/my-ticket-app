import { sql } from "@vercel/postgres";

export async function insertReservation(gym_time_id: number, user_id: number) {
  return Promise.all([
    sql`insert into reservation (gym_time_id, user_id) values (${gym_time_id}, ${user_id})`,
    sql`update gym_time set current = current + 1 where id = ${gym_time_id}`,
  ]);
}
