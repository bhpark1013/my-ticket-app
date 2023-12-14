import { sql } from "@vercel/postgres";

const fetchReservationInfo = (reservationId: number) =>
  sql`select * from reservation where id = ${reservationId}`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetchReservationInfo(Number(id));

  return Response.json({ res });
}
