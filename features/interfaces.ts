interface Reportable {
  summary(): string;
}

const oldHondaCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `
    Name: ${this.name}, 
    Year: ${this.year}, 
    Broken? ${this.broken}
    `;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

// you must provide a Vehicle, which meets the specifications of the vehicle interface
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldHondaCivic);
printSummary(drink); // we've reused the interface now.

// 'reportable' is a gatekeeper to 'printSummary'
// oldHondaCivic and drink must satisfy 'reportable' interface to work with 'printSummary'
