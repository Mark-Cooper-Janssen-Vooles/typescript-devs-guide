class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void { // this over-rides the method of the parent class
    console.log('vroooom')
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();