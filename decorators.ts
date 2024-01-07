interface ICar {
  fuel: string;
  open: boolean;
  freeSeats: number;
}

@changeDoorStatus(false)
class myCar implements ICar {
  fuel: string = "50%";
  open: boolean = true;
  freeSeats: number = 4;
  isOpen() {
    console.log(this.fuel);
    return this.open ? "open" : "close";
  }
  //   isNumber() {
  //     return this.freeSeats === 4 ? "default" : "changed";
  //   }
}

function changeDoorStatus(status: boolean) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      open: boolean = status;
    };
  };
}

// function closeCar<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     open: boolean = false;
//     freeSeats: number = 10;
//   };
// }

const car = new myCar();
console.log(car.isOpen());
// console.log(car.isNumber());
