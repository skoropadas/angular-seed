export class Geo {
  lat: string;
  lng: string;

  serialize(source: Geo): Geo {
    this.lat = source.lat;
    this.lng = source.lng;

    return this;
  }
}
