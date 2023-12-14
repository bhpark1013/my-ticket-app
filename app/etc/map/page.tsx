import { Box } from "@chakra-ui/react";
import { MapMarker } from "react-kakao-maps-sdk";
import KakaoMap from "../../gym/place/components/kakao-map";

export default async function ReservationPlace({
  searchParams: { x, y, name },
}: {
  searchParams: { x: number; y: number; name: string };
}) {
  return (
    <div style={{ width: "100%", height: "800px" }}>
      <KakaoMap
        places={[
          {
            id: 1,
            coordinate_x: x,
            coordinate_y: y,
            name: name,
          },
        ]}
      ></KakaoMap>
    </div>
  );
}
