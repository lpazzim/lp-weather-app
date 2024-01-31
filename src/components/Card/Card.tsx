import { styled } from "@linaria/react";
import "../../assets/images/rain-background.jpg";

import { FaSun, FaMoon } from "react-icons/fa";
import { WeatherCodeDescription } from "../../assets/utils";
type CardProps = {
  children: React.ReactNode;
  temperature?: number;
  isDay?: boolean;
  weatherCode?: number;
  rainy?: number;
};

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 300px;
  min-height: 300px;

  margin: 50px auto;
  text-align: center;
  border-radius: 10px;
  box-shadow: 5px 5px 6px #bdbdbd;
`;

const BackgroundImg = styled.div`
  height: 150px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TempertureIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  text-shadow: 0 0 0.2em #000000;
  backdrop-filter: blur(10px) saturate(100%);
  border-radius: 10px;
`;

const TempertureText = styled.div`
  position: absolute;
  top: 15px;
  right: 90px;
  z-index: 1;
  color: white;
  font-size: 50px;
  text-shadow: 0 0 0.2em #000000;
  backdrop-filter: blur(1px) saturate(100%);
  border-radius: 10px;
`;

const WeatherInterpretation = styled.div`
  position: absolute;
  top: 85px;
  right: 20px;
  z-index: 1;
  color: white;
  font-size: 16px;
  text-shadow: 0 0 0.2em #000000;
  backdrop-filter: blur(10px) saturate(100%);
  border-radius: 10px;
`;

export const Card = ({
  children,
  temperature = 0,
  isDay,
  weatherCode = 0,
  rainy = 0,
}: CardProps) => {
  const dayBackgroundImage = "/src/assets/images/day-background.jpg";
  const nightBackgroundImage = "/src/assets/images/night-background.jpg";
  const rainBackgroundImage = "/src/assets/images/rain.jpg";

  const backgroundImg = () => {
    if (rainy > 0) {
      return rainBackgroundImage;
    }
    if (isDay) {
      return dayBackgroundImage;
    } else {
      return nightBackgroundImage;
    }
  };

  return (
    <Container>
      <BackgroundImg style={{ backgroundImage: `url(${backgroundImg()})` }} />
      <TempertureIcon>
        {isDay ? (
          <FaSun color="white" size={60} />
        ) : (
          <FaMoon color="white" size={60} />
        )}
      </TempertureIcon>
      <TempertureText>{`${temperature}º`}</TempertureText>
      <WeatherInterpretation>{`${WeatherCodeDescription(
        weatherCode
      )}`}</WeatherInterpretation>
      {children}
    </Container>
  );
};
