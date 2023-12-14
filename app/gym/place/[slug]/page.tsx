"use client";

import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Text,
  Box,
} from "@chakra-ui/react";
import { sql } from "@vercel/postgres";
import dayjs from "dayjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//TODO: delete time

// const fetchTimes = (placeId: number) => {
//   return sql`select * from gym_time where gym_id = ${placeId} order by start_datetime asc`;
// };

const PlaceTimeReservation = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const placeId = slug;

  const router = useRouter();
  const [times, setTimes] = useState(
    [] as {
      id: number;
      gym_id: number;
      start_datetime: Date;
      capacity: number;
      current: number;
    }[]
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/gym/time-api?id=${placeId}`);
      const data = await result.json();
      console.log(data);
      setTimes(data.res.rows);
    };
    fetchData();
  }, []);

  const insertData = async (timeId: number) => {
    await fetch(`insertReservation?gym_time_id=${timeId}&user_id=1`);
  };
  // const times = (await fetchTimes(Number(placeId))).rows as {
  //   id: number;
  //   gym_id: number;
  //   start_datetime: Date;
  //   capacity: number;
  //   current: number;
  // }[];

  return (
    <>
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>시간</Th>
              <Th>남은 사람</Th>
              <Th>예약</Th>
            </Tr>
          </Thead>
          <Tbody>
            {times.length > 0
              ? times.map((time) => (
                  <Tr key={time.id}>
                    <Td h="70px" fontSize={"30px"}>
                      {dayjs(time.start_datetime).format("YYMMDD HH:mm")}
                    </Td>
                    <Td
                      fontSize={"30px"}
                    >{`${time.current}/${time.capacity}`}</Td>
                    <Td>
                      {time.current < time.capacity ? (
                        <Button
                          disabled={time.current >= time.capacity}
                          onClick={async () => {
                            insertData(time.id);
                            router.push(`/gym/result?timeId=${time.id}`);
                          }}
                          fontSize={"30px"}
                        >
                          예약
                        </Button>
                      ) : (
                        <Box>불가능</Box>
                      )}
                    </Td>
                  </Tr>
                ))
              : []}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default PlaceTimeReservation;
