"use client";

import { Box, HStack, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { insertReservation } from "../place/[slug]/query";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const fetchReservationInfo = (reservationId: number) => {
  return {
    id: 1,
    name: "성동 운동장",
    position: { lat: 37.55663602596717, lng: 127.0457001269887 },
    date: "2024-01-10",
    time: "10:00",
  };
};

const GymReservationResult = ({
  params: { slug },
  searchParams: { timeId },
}: {
  params: { slug: string };
  searchParams: { timeId: string };
}) => {
  const [timeInfo, setTimeInfo] = useState<{
    capacity: number;
    coordinate_x: number;
    coordinate_y: number;
    current: number;
    gym_id: number;
    name: string;
    start_datetime: Date;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`gym-time-one?id=${timeId}`);
      const data = await result.json();
      console.log(data);
      setTimeInfo(data.res.rows[0]);
    };
    fetchData();
  }, []);

  // const reservationInfo = fetchReservationInfo(reservationId);

  return (
    <>
      {timeInfo ? (
        <div id="map" style={{ width: "100%", height: "600px" }}>
          <Map
            center={{ lat: timeInfo.coordinate_x, lng: timeInfo.coordinate_y }} // 지도의 중심 좌표
            style={{ width: "100%", height: "90%" }} // 지도 크기
            level={4} // 지도 확대 레벨
          >
            <MapMarker
              position={{
                lat: timeInfo.coordinate_x,
                lng: timeInfo.coordinate_y,
              }}
              clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
              //   onClick={(s
            >
              <Box display={"flex"} color="black" justifyContent={"center"}>
                {timeInfo.name}
              </Box>
            </MapMarker>
          </Map>
        </div>
      ) : (
        <></>
      )}
      <VStack>
        <Box
          display={"flex"}
          justifyContent={"center"}
          w="100%"
          h="50px"
          fontSize={"40px"}
        ></Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          w="100%"
          h="50px"
          fontSize={"40px"}
        >
          {timeInfo
            ? dayjs(timeInfo?.start_datetime).format("YYMMDD HH:MM")
            : ""}
          {timeInfo ? ` 예약완료` : ""}
        </Box>
      </VStack>
    </>
  );
};

export default GymReservationResult;
