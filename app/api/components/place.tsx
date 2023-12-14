import { Box } from "@chakra-ui/react";
import { QueryResultRow, sql } from "@vercel/postgres";
import Head from "next/head";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import fetchPlaces from "../queries";
import { use, useEffect, useState } from "react";
import Link from "next/link";

export default async function ServerPlace() {
  const places = await fetchPlaces();
  // const [places, setPlaces] = useState([]);

  // const fetchData = async () => {
  //   const result = await fetchPlaces();
  //   setPlaces(result as any);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "800px" }}>
        {/* 37.55663602596717 이고, 경도는 127.0457001269887 */}
        <Map
          center={{ lat: 37.55663602596717, lng: 127.0457001269887 }} // 지도의 중심 좌표
          style={{ width: "100%", height: "90%" }} // 지도 크기
          level={6} // 지도 확대 레벨
        >
          {places.map((gym: any) => {
            return (
              <Link key={gym.id} href={`/gym/place/${gym.id}`}>
                <MapMarker
                  position={{ lat: gym.x, lng: gym.y }}
                  clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                >
                  <Box display={"flex"} color="black" justifyContent={"center"}>
                    {gym.remain}
                  </Box>
                </MapMarker>
              </Link>
            );
          })}
        </Map>
      </div>
    </>
  );
}
