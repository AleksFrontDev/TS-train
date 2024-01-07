interface ICar {
  fuel: string;
  open: boolean;
  freeSeats: number;
}

@changeDoorStatus(false)
@changeFreeSeats(300)
class myCar implements ICar {
  fuel: string = "50%";
  open: boolean = true;
  freeSeats: number = 4;
  isOpen() {
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

function changeFreeSeats(amount: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      freeSeats: number = amount;
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
console.log(car.open);
console.log(car.freeSeats);
// console.log(car.isNumber());
