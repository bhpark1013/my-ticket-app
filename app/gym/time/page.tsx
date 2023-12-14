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
import Link from "next/link";

//TODO: delete time
const TimeReservation = () => {
  const reservations = [
    { id: 1, time: "10:00" },
    { id: 2, time: "10:30" },
    { id: 3, time: "11:00" },
    { id: 4, time: "11:30" },
    { id: 5, time: "12:00" },
    { id: 6, time: "13:00" },
  ];
  return (
    <>
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>시간</Th>
              <Th>찾아보기</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reservations.map((reservation) => (
              <Tr key={reservation.id}>
                <Td h="70px" fontSize={"30px"}>
                  {reservation.time}
                </Td>
                <Td>
                  <Link href={`/gym/time/time-place`}>
                    <Button fontSize={"30px"}>찾아보기</Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TimeReservation;
