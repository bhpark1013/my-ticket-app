import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const fetchPlaces = () => {
  return [
    {
      id: 1,
      remain: "10/40",
      position: { lat: 37.55663602596717, lng: 127.0457001269887 },
    },
    {
      id: 2,
      remain: "10/40",
      position: { lat: 37.55, lng: 127.04 },
    },
    {
      id: 3,
      remain: "10/40",
      position: { lat: 37.56, lng: 127.05 },
    },
    {
      id: 4,
      remain: "10/40",
      position: { lat: 37.545, lng: 127.054 },
    },
  ];
};

const Place = () => {
  const router = useRouter();
  const places = fetchPlaces();
  return (
    <>
      <div id="map" style={{ width: "100%", height: "800px" }}>
        {/* 37.55663602596717 이고, 경도는 127.0457001269887 */}
        <Map
          center={{ lat: 37.55663602596717, lng: 127.0457001269887 }} // 지도의 중심 좌표
          style={{ width: "100%", height: "90%" }} // 지도 크기
          level={6} // 지도 확대 레벨
        >
          {places.map((e) => {
            return (
              <MapMarker
                key={e.id}
                position={e.position}
                clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                onClick={() => {
                  router.push(`/gym/place/${e.id}`);
                }}
              >
                <Box display={"flex"} color="black" justifyContent={"center"}>
                  {e.remain}
                </Box>
              </MapMarker>
            );
          })}
        </Map>
      </div>
    </>
  );
};

export default Place;
