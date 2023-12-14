import fetchPlaces from "../../../api/queries";
import KakaoMap from "../../place/components/kakao-map";

export default async function Place() {
  // const router = useRouter();
  const places = (await fetchPlaces()) as any;

  return (
    <>
      <div id="map" style={{ width: "100%", height: "800px" }}>
        {/* 37.55663602596717 이고, 경도는 127.0457001269887 */}
        <KakaoMap places={places} onClickUrl={`/gym/result?timeId=1`} />
      </div>
    </>
  );
}
