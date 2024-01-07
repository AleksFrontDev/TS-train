interface ICar {
  fuel: string;
  open: boolean;
  freeSeats: number;
}

@closeCar
class myCar implements ICar {
  fuel: string = "50%";
  open: boolean = true;
  freeSeats: number = 4;
  isOpen() {
    console.log(this.fuel);
    return this.open ? "open" : "close";
  }
}

function closeCar<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    open: boolean = false;
  };
}

const car = new myCar();
console.log(car.isOpen());
