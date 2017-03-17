export class Geo {
  lat: number;
  lng: number;

  constructor() {
    this.lat = 0;
    this.lng = 0;
  }

  serialize(source: Geo): Geo {
    this.lat = source.lat;
    this.lng = source.lng;

    return this;
  }
}
