import {Geo} from "../geo/geo.model";

export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;

  serialize(source: Address): Address {
    this.street = source.street;
    this.suite = source.suite;
    this.city = source.city;
    this.zipcode = source.zipcode;
    this.geo = new Geo().serialize(source.geo);

    return this;
  }
}
