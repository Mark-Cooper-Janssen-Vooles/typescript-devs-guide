class Vehicle {
  protected honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  private drive(): void { // this over-rides the method of the parent class
    console.log('vroooom')
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();