import {
  Box,
  Card,
  CardBody,
  Text,
  HStack,
  CardFooter,
  Button,
  Img,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const CustomMenu = () => {
  const router = useRouter();
  return (
    <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} margin="20px">
      {[
        ["티켓예매", "/images/ticket.png", "/ticket"],
        ["시설예약", "/images/building.png", "/gym"],
        ["여행", "/images/travel.png", "/travel"],
        ["이용정보", "/images/list.png", "/use"],
      ].map((e) => {
        return (
          <Card
            key={e[0]}
            w="100%"
            h="350px"
            align={"center"}
            padding={"20px"}
            _hover={{
              cursor: "pointer",
            }}
            border={"1px solid #E2E8F0"}
          >
            <CardBody padding="20px" onClick={() => router.push(e[2])}>
              <Text fontSize={"40px"}>{e[0]}</Text>
            </CardBody>
            <CardFooter>
              <Image src={e[1]} alt="이미지" width={60} height={60} />
            </CardFooter>
          </Card>
        );
      })}
    </Box>
  );
};

export default CustomMenu;
