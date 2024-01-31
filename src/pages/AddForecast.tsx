import { styled } from "@linaria/react";
import { useCallback, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "../components/Button/Button";
import { ForecastItemProps } from "../services/Forecast.types";
import locationStore from "../stores/store";
import { observer } from "mobx-react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  align-items: flex-end;
`;

const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

const SelectedListContainer = styled.div`
  max-height: 200px;
  overflow-y: scroll;
`;

const AddForecast = () => {
  const [item, setItem] = useState<ForecastItemProps>({
    id: 0,
    latitude: 0,
    longitude: 0,
  });

  const addItem = () => {
    if (item.latitude > 90 || item.latitude < -90) {
      alert("Latitude must be between -90 and 90");
      return;
    }
    if (item.longitude > 180 || item.longitude < -180) {
      alert("Longitude must be between -180 and 180");
      return;
    }

    locationStore.addCoordinates(
      item.latitude,
      item.longitude,
      locationStore.coordinatesList.length + 1
    );
    setItem({ id: item.id + 1, latitude: 0, longitude: 0 });
  };

  const removeItem = useCallback((id: number) => {
    locationStore.removeCoordinatesById(id);
  }, []);

  return (
    <div>
      <h1>Add Forecast</h1>
      <Container key={item.id}>
        <InputContainer>
          Latitude
          <Input
            type="number"
            value={item.latitude}
            min={-90}
            max={90}
            onChange={(e) =>
              setItem({ ...item, latitude: parseFloat(e.target.value) })
            }
          />
        </InputContainer>
        <InputContainer>
          Longitude
          <Input
            type="number"
            value={item.longitude}
            min={-180}
            max={180}
            onChange={(e) =>
              setItem({ ...item, longitude: parseFloat(e.target.value) })
            }
          />
        </InputContainer>
        <Button label="" onClick={addItem}>
          <FaPlus />
        </Button>
      </Container>
      <h2>Selected Forecast list</h2>

      <SelectedListContainer>
        {locationStore.coordinatesList.map((item) => {
          return (
            <Container key={item.id}>
              <div>
                {`Latitude: ${item.latitude} - Longitude: ${item.longitude}`}
              </div>
              <Button label="" onClick={() => removeItem(item.id)}>
                <FaX />
              </Button>
            </Container>
          );
        })}
      </SelectedListContainer>
      <FooterContainer>
        <Link to="/forecasts">
          <Button label="Go to forecasts" onClick={() => {}} />
        </Link>
      </FooterContainer>
    </div>
  );
};

const AddForecastPage = observer(AddForecast);
export { AddForecastPage };
