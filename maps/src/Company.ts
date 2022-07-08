import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  compayName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'blue';

  constructor() {
    this.compayName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name is: ${this.compayName}</h1>
        <h3>Catchphrase is: ${this.catchPhrase}<h3>
      </div>
    `
  }
}