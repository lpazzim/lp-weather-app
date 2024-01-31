import { styled } from "@linaria/react";
import Carousel from "nuka-carousel";
import { useEffect, useMemo, useState } from "react";
import {
  FaCrosshairs,
  FaTemperatureLow,
  FaUmbrella,
  FaWind,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { getForecastData } from "../services/Forecast";
import * as T from "../services/Forecast.types";
import locationStore from "../stores/store";

const Container = styled.div`
  @media (max-width: 600px) {
    width: 300px;
    overflow: hidden;
  }
`;

const CarouselItem = styled.div`
  margin: 0 10px;
  min-width: 300px;
  @media (max-width: 600px) {
    width: 300px;
  }
`;

const WeatherDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TempertureInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TempertureText = styled.div`
  display: flex;

  font-size: 14px;
  font-weight: 600;
  color: #4d5b7c;
  padding-left: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const Forecasts = () => {
  const [carouselItems, setCarouselItems] = useState(1);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const list = locationStore.coordinatesList;
  const [forecastDataList, setForecastDataList] = useState<
    T.WeatherDataProps[]
  >([]);

  const LatitudeLongitudeList = useMemo((): T.ForecastPayload => {
    const resultList: T.ForecastPayload = {
      latitude: [],
      longitude: [],
      current: null,
      timezone: null,
    };

    for (const val of list) {
      resultList.latitude.push(val.latitude);
      resultList.longitude.push(val.longitude);
    }

    return resultList;
  }, [list]);

  useEffect(() => {
    getForecastDataList();
  }, []);

  async function getForecastDataList() {
    const result = await getForecastData(LatitudeLongitudeList)
      .then((data) => {
        return data;
      })
      .catch((err) => err)
      .finally(() => {});
    setCarouselItems(result.length > 3 ? 3 : result.length);
    setForecastDataList(result);
  }

  return (
    <>
      <h1>FORECASTS</h1>
      <HeaderContainer>
        <Link to="/add-forecast">
          <Button label="Add or change forecast" onClick={() => {}} />
        </Link>
      </HeaderContainer>

      <Container>
        {forecastDataList.length > 0 ? (
          <Carousel slidesToShow={width <= 900 ? 1 : carouselItems}>
            {forecastDataList.map((item: T.WeatherDataProps, idx) => (
              <CarouselItem key={idx}>
                <Card
                  temperature={Math.round(item.temperature2m)}
                  isDay={item.isDay === 1 ? true : false}
                  key={idx}
                  weatherCode={item.weatherCode}
                  rainy={item.rain}
                >
                  <WeatherDataContainer key={idx}>
                    <TempertureInfo>
                      <FaCrosshairs size={18} color="#4d5b7c" />
                      <TempertureText>
                        {`Latitude: ${Math.trunc(item.latitude)}`} /{" "}
                        {`Longitude: ${Math.trunc(item.longitude)}`}
                      </TempertureText>
                    </TempertureInfo>
                    <TempertureInfo>
                      <FaUmbrella size={18} color="#4d5b7c" />
                      <TempertureText>{`Rain: ${Math.trunc(
                        item.rain
                      )} mm (inch)`}</TempertureText>
                    </TempertureInfo>
                    <TempertureInfo>
                      <FaTemperatureLow size={18} color="#4d5b7c" />
                      <TempertureText>{`Humidity: ${item.relativeHumidity2m}%`}</TempertureText>
                    </TempertureInfo>
                    <TempertureInfo>
                      <FaWind size={18} color="#4d5b7c" />
                      <TempertureText>{`WindSpeed: ${Math.trunc(
                        item.windSpeed10m
                      )} kmh`}</TempertureText>
                    </TempertureInfo>
                  </WeatherDataContainer>
                </Card>
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          <MessageContainer> {`There's no forecast to show`}</MessageContainer>
        )}
      </Container>
    </>
  );
};
