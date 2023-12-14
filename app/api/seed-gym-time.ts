import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

import dayjs from "dayjs";

// utils/generateSqlQuery.ts

async function executeQuery(date: Date) {
  const startTime = dayjs(date);
  const endTime = dayjs(date).add(8, "hour");
  const capacity = 10;
  const current = 3;
  const queries: string[] = [];

  for (let gymId = 1; gymId <= 4; gymId++) {
    let currentTime = startTime;

    while (currentTime.isBefore(endTime) || currentTime.isSame(endTime)) {
      const formattedTime = currentTime.format("YYYY-MM-DD HH:mm:ss");
      await sql`insert into gym_time (gym_id, start_datetime, capacity, current) VALUES (${gymId}, ${formattedTime}, ${capacity}, ${current});`;
      currentTime = currentTime.add(1, "hour");
    }
  }

  return;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    for (let i = 0; i < 7; i++) {
      const today = dayjs("2021-12-23::10:00");
      const date = today.add(i, "day").toDate();
      await executeQuery(date);
      res.status(200).json({ message: "Success" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error executing SQL query", error });
  }
}
