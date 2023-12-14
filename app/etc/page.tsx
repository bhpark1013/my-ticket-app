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
  const [reservations, setReservations] = useState<
    {
      id: number;
      start_datetime: Date;
      name: string;
      x: number;
      y: number;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/etc/reservations-api`);
      const data = await result.json();
      console.log(data);
      setReservations(data.res.rows);
    };
    fetchData();
  }, []);

  return (
    <>
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>시간</Th>
              <Th>장소</Th>
              <Th>찾아보기</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reservations.length > 0
              ? reservations.map((reservation) => (
                  <Tr key={reservation.id}>
                    <Td h="70px" fontSize={"30px"}>
                      {dayjs(reservation.start_datetime).format(
                        "YY년 MM월 DD일 HH:mm"
                      )}
                    </Td>
                    <Td fontSize={"30px"}>{`${reservation.name}`}</Td>
                    <Td>
                      <Link
                        href={`/etc/map?x=${reservation.x}&y=${reservation.y}&name=${reservation.name}`}
                      >
                        <Button>지도</Button>
                      </Link>
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
