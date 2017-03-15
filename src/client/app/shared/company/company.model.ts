export class Company {
  name: string;
  catchPhrase: string;
  bs: string;

  serialize(source: Company): Company {
    this.name = source.name;
    this.catchPhrase = source.catchPhrase;
    this.bs = source.bs;

    return this;
  }
}
