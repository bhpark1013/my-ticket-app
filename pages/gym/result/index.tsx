import { Box, HStack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const fetchReservationInfo = (reservationId: number) => {
  return {
    id: 1,
    name: "성동 운동장",
    position: { lat: 37.55663602596717, lng: 127.0457001269887 },
    date: "2024-01-10",
    time: "10:00",
  };
};

const GymReservationResult = () => {
  const router = useRouter();
  const reservationId = router.query.reservationId || 1;
  const reservationInfo = fetchReservationInfo(reservationId as number);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "600px" }}>
        <Map
          center={reservationInfo.position} // 지도의 중심 좌표
          style={{ width: "100%", height: "90%" }} // 지도 크기
          level={4} // 지도 확대 레벨
        >
          <MapMarker
            position={reservationInfo.position}
            clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
            //   onClick={(s
          >
            <Box display={"flex"} color="black" justifyContent={"center"}>
              {reservationInfo.name}
            </Box>
          </MapMarker>
        </Map>
      </div>
      <VStack>
        <Box
          display={"flex"}
          justifyContent={"center"}
          w="100%"
          h="50px"
          fontSize={"40px"}
        >
          {reservationInfo.date}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          w="100%"
          h="50px"
          fontSize={"40px"}
        >
          {`${reservationInfo.time} 예약완료!`}
        </Box>
      </VStack>
    </>
  );
};

export default GymReservationResult;
