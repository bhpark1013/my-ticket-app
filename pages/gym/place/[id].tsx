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
} from "@chakra-ui/react";
import { useRouter } from "next/router";

//TODO: delete time

const fetchReservations = (placeId: number) => {
  return [
    { id: 1, time: "10:00", remain: "10/40" },
    { id: 2, time: "10:30", remain: "10/40" },
    { id: 3, time: "11:00", remain: "10/40" },
    { id: 4, time: "11:30", remain: "10/40" },
    { id: 5, time: "12:00", remain: "10/40" },
    { id: 6, time: "13:00", remain: "10/40" },
  ];
};

const PlaceTimeReservation = () => {
  const router = useRouter();
  const placeId = router.query.id || 1;

  const reservations = fetchReservations(placeId as number);
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
            {reservations.map((reservation) => (
              <Tr key={reservation.id}>
                <Td h="70px" fontSize={"30px"}>
                  {reservation.time}
                </Td>
                <Td fontSize={"30px"}>{reservation.remain}</Td>
                <Td>
                  <Button
                    fontSize={"30px"}
                    onClick={() => {
                      router.push(
                        `/gym/result?reservationId=${reservation.id}`
                      );
                    }}
                  >
                    예약
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default PlaceTimeReservation;
