import {Address} from "../address/address.model";
import {Company} from "../company/company.model";

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;

  constructor() {
    this.address = new Address();
    this.company = new Company();
  }

  serialize(source: User): User {
    this.id = source.id;
    this.name = source.name;
    this.username = source.username;
    this.email = source.email;
    this.address.serialize(source.address);
    this.phone = source.phone;
    this.website = source.website;
    this.company.serialize(source.company);

    return this;
  }
}
