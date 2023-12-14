"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { insertReservation } from "./query";

export const ButtonAfterReservation = ({ id }: { id: number }) => {
  const router = useRouter();

  return (
    <Button
      fontSize={"30px"}
      onClick={async () => {
        router.push(`/gym/result?reservationId=${id}`);
      }}
    >
      예약
    </Button>
  );
};
