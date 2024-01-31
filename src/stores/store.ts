import { makeObservable, observable, action } from "mobx";

type Coordinates = {
  id: number;
  latitude: number;
  longitude: number;
};

class LocationStore {
  coordinatesList: Coordinates[] = [];
  constructor() {
    makeObservable(this, {
      coordinatesList: observable,
      removeCoordinatesById: action,
      addCoordinates: action,
    });
  }

  addCoordinates(latitude: number, longitude: number, id: number) {
    this.coordinatesList.push({ id, latitude, longitude });
  }

  removeCoordinatesById(id: number) {
    this.coordinatesList = this.coordinatesList.filter(
      (coordinates) => coordinates.id !== id
    );
  }
}

const locationStore = new LocationStore();
export default locationStore;
