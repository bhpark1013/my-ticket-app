"use client";

import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = ({
  places,
}: {
  places: {
    id: number;
    coordinate_x: number;
    coordinate_y: number;
    name: string;
  }[];
}) => {
  const router = useRouter();

  return (
    <Map
      center={{ lat: 37.55663602596717, lng: 127.0457001269887 }} // 지도의 중심 좌표
      style={{ width: "100%", height: "90%" }} // 지도 크기
      level={6} // 지도 확대 레벨
    >
      {places.map((gym) => {
        return (
          <MapMarker
            position={{ lat: gym.coordinate_x, lng: gym.coordinate_y }}
            clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
            key={gym.id}
            onClick={() => {
              router.push(`/gym/place/${gym.id}`);
            }}
          >
            <Box display={"flex"} color="black" justifyContent={"center"}>
              {gym.name}
            </Box>
          </MapMarker>
        );
      })}
    </Map>
  );
};
export default KakaoMap;
