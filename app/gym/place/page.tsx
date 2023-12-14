import { Box } from "@chakra-ui/react";
import { QueryResultRow, sql } from "@vercel/postgres";
import Head from "next/head";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import fetchPlaces from "../../api/queries";
import { use, useEffect, useState } from "react";
import ServerPlace from "../../api/components/place";
import Link from "next/link";
import KakaoMap from "./components/kakao-map";

export default async function Place() {
  // const router = useRouter();
  const places = (await fetchPlaces()) as any;

  return (
    <>
      <div id="map" style={{ width: "100%", height: "800px" }}>
        {/* 37.55663602596717 이고, 경도는 127.0457001269887 */}
        <KakaoMap places={places} />
      </div>
    </>
  );
}
