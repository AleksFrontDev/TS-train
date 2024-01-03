// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа

enum TypesOfMedia {
  Video = "video",
  Audio = "audio",
}

enum FormatsOfMedia {
  MP4 = ".mp4",
  MOV = ".mov",
  MKV = ".mkv",
  FLV = ".flv",
  WEBM = ".webM",
}

interface typePlayMedia {
  name: string;
  type: TypesOfMedia;
  format: FormatsOfMedia;
  subtitles?: string;
  marks?: unknown;
}

function playMedia(
  { name, type, format, subtitles, marks }: typePlayMedia = {
    name: "example",
    type: TypesOfMedia.Audio,
    format: FormatsOfMedia.MP4,
  }
): string {
  let marksLog;

  // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
  // Если это строка, то просто поместить её в marksLog
  // Если что-то другое - то marksLog = "Unsupported type of marks"
  // Не допускайте any!

  if (Array.isArray(marks)) {
    marksLog = marks.join("");
  } else if (typeof marks === "string") {
    marksLog = marks;
  } else {
    marksLog = "Unsupported type of marks";
  }

  console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
  //?? - оператор нулевого слияния(если первое === null || undefined return второе)
  return "Media started";
}

playMedia({
  name: "WoW",
  type: TypesOfMedia.Audio,
  format: FormatsOfMedia.MP4,
  subtitles: "hmhmhm hmhmhm doh",
  marks: ["4:30", "5:40"],
});
//////////////////

type Animal = "cat" | "dog" | "bird";

enum AnimalStatus {
  Available = "available",
  NotAvaialble = "not available",
}

interface AnimalData {
  animal: "cat" | "dog" | "bird";
  breed: string;
  sterilized?: string;
}

interface AnimalAvailableData extends AnimalData {
  location: string;
  age?: number;
}

interface AnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}

interface AnimalAvailableResponse {
  status: AnimalStatus.Available;
  data: AnimalAvailableData;
}

interface AnimalNotAvailableResponse {
  status: AnimalStatus.NotAvaialble;
  data: AnimalNotAvailableData;
}

type Res = AnimalAvailableResponse | AnimalNotAvailableResponse;

function isAvailable(res: Res): res is AnimalAvailableResponse {
  if (res.status === AnimalStatus.Available) {
    return true;
  } else {
    return false;
  }
}

function checkAnimalData(animal: Res): AnimalAvailableData | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

/////

// const forms = document.querySelectorAll("form");
// const email = document.querySelector("#email") as HTMLInputElement;
// const title = document.querySelector("#title") as HTMLInputElement;
// const text = document.querySelector("#text") as HTMLTextAreaElement;
// const checkbox = document.querySelector("#checkbox") as HTMLInputElement;

// interface Iformdata {
//   email: string;
//   title: string;
//   text: string;
//   checkbox: boolean;
// }

// const formData: Iformdata = {
//   email: "",
//   title: "",
//   text: "",
//   checkbox: false,
// };

// forms.forEach((form) =>
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     formData.email = email?.value ?? "";
//     formData.title = title?.value ?? "";
//     formData.text = text?.value ?? "";
//     formData.checkbox = checkbox?.checked ?? false;

//     if (validateFormData(formData)) {
//       checkFormData(formData);
//     }
//   })
// );

// function validateFormData(data: Iformdata): boolean {
//   // Если каждое из свойств объекта data правдиво...
//   if (Object.values(data).every((value) => value)) {
//     return true;
//   } else {
//     console.log("Please, complete all fields");
//     return false;
//   }
// }

// function checkFormData(data: Iformdata) {
//   const { email } = data;
//   const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

//   // Если email совпадает хотя бы с одним из массива
//   if (emails.some((e) => e === email)) {
//     console.log("This email is already exist");
//   } else {
//     console.log("Posting data...");
//   }
// }

////

// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface PlayerData<Game, Hours> {
  game: Game;
  hours: Hours;
  server: string;
}

const player1: PlayerData<string, number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: PlayerData<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: PlayerData<string, { total: number; inMenu: number }> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

enum FigureNames {
  Rect = "rect",
  Circle = "circle",
  Triangle = "triangle",
  Line = "line",
}

interface Figure {
  name: FigureNames;
}

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

function calculateAmountOfFigures<T extends Figure>(
  figure: T[]
): AmountOfFigures {
  const amount: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };

  figure.forEach((fig) => {
    switch (fig.name) {
      case FigureNames.Rect:
        amount.squares++;
        break;
      case FigureNames.Circle:
        amount.circles++;
        break;
      case FigureNames.Triangle:
        amount.triangles++;
        break;
      default:
        amount.others++;
    }
  });

  return amount;
}

interface CustomFigure extends Figure {
  data?: {};
}

const data: CustomFigure[] = [
  {
    name: FigureNames.Rect,
    data: { a: 5, b: 10 },
  },
  {
    name: FigureNames.Rect,
    data: { a: 6, b: 11 },
  },
  {
    name: FigureNames.Triangle,
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: FigureNames.Line,
    data: { l: 15 },
  },
  {
    name: FigureNames.Circle,
    data: { r: 10 },
  },
  {
    name: FigureNames.Circle,
    data: { r: 5 },
  },
  {
    name: FigureNames.Rect,
    data: { a: 15, b: 7 },
  },
  {
    name: FigureNames.Triangle,
  },
];

console.log(calculateAmountOfFigures(data));

////////

interface IPhone {
  company: string;
  number: number;
}

// IMobilePhone должен наследоваться от IPhone,
// тип свойства companyPartner зависит от свойства company

interface IMobilePhone extends IPhone {
  size: string;
  companyPartner: IPhone["company"];
  manufactured: Date;
}

// Типизировать объект phones

const phones: IMobilePhone[] = [
  {
    company: "Nokia",
    number: 1285637,
    size: "5.5",
    companyPartner: "MobileNokia",
    manufactured: new Date("2022-09-01"),
  },
  {
    company: "Samsung",
    number: 4356637,
    size: "5.0",
    companyPartner: "SamMobile",
    manufactured: new Date("2021-11-05"),
  },
  {
    company: "Apple",
    number: 4552833,
    size: "5.7",
    companyPartner: "no data",
    manufactured: new Date("2022-05-24T12:00:00"),
  },
];

interface IPhonesManufacturedAfterDate extends IMobilePhone {
  initialDate: string;
}

// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе

function filterPhonesByDate(
  phones: IMobilePhone[],
  key: keyof IMobilePhone,
  initial: string
): IPhonesManufacturedAfterDate[] {
  return phones
    .filter((phone) => {
      const manufact = phone[key];
      if (
        manufact instanceof Date &&
        manufact.getTime() > new Date(initial).getTime()
      ) {
        return phone;
      }
    })
    .map((phone) => {
      const newObj = { ...phone, initialDate: initial };
      return newObj;
    });
}

// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта

console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));
///

// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)
interface IFitnessClass {
  name: string;
  startsAt: string;
  duration: number;
}

interface IFutureClass extends Omit<IFitnessClass, "startsAt"> {
  willStartsAt: string;
}

interface IClient {
  name: string;
  age: string | number;
  gender: "male" | "female";
  timeLeft: string;
  makeCallFor: Date;
}

type CurrClient = Omit<IClient, "makeCallFor">;
type ExClient = Omit<IClient, "timeLeft">;
type FutureClient = Pick<IClient, "name" | "makeCallFor">;

interface IFitnessClub {
  clubName: string;
  location: string;
  classes: IFitnessClass[];
  futureClasses: IFutureClass[];
  currClients: CurrClient[];
  exClients: ExClient[];
  futureClients: FutureClient[];
}

const fitnessClubCenter: IFitnessClub = {
  clubName: "Fitness club Center",
  location: "central ave. 45, 5th floor",
  classes: [
    {
      name: "yoga",
      startsAt: "8:00 AM",
      duration: 60,
    },
    {
      name: "trx",
      startsAt: "11:00 AM",
      duration: 45,
    },
    {
      name: "swimming",
      startsAt: "3:00 PM",
      duration: 70,
    },
  ],
  futureClasses: [
    {
      name: "boxing",
      willStartsAt: "6:00 PM",
      duration: 40,
    },
    {
      name: "breath training",
      willStartsAt: "8:00 PM",
      duration: 30,
    },
  ],
  currClients: [
    {
      name: "John Smith",
      age: "-",
      gender: "male",
      timeLeft: "1 month",
    },
    {
      name: "Alise Smith",
      age: 35,
      gender: "female",
      timeLeft: "3 month",
    },
    {
      name: "Ann Sonne",
      age: 24,
      gender: "female",
      timeLeft: "5 month",
    },
  ],
  exClients: [
    {
      name: "Tom Smooth",
      age: 50,
      gender: "male",
      makeCallFor: new Date("2023-08-12"),
    },
  ],
  futureClients: [
    {
      name: "Maria",
      makeCallFor: new Date("2023-07-10"),
    },
  ],
};

///

interface ISlider {
  container?: string;
  numberOfSlides?: number;
  speed?: 300 | 500 | 700;
  direction?: "horizontal" | "vertical";
  dots?: boolean;
  arrows?: boolean;
  animationName?: string;
}

function createSlider({
  container = "",
  numberOfSlides = 1,
  speed = 300,
  direction = "horizontal",
  dots = true,
  arrows = true,
}: ISlider = {}): void {
  console.log(container, numberOfSlides, speed, direction, dots, arrows);
}

createSlider();

// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения

type IcustomSliderOptions = Required<Omit<ISlider, "animationName" | "speed">>;
interface IcutomSLider extends IcustomSliderOptions {
  speed: number;
}

// type Ifinally = IcustomSliderOptions && IchangeSpeed

const customSliderOptions: IcutomSLider = {
  container: "id",
  numberOfSlides: 4,
  speed: 1100,
  direction: "horizontal",
  dots: true,
  arrows: true,
};

function createCustomSlider(options: IcutomSLider): void {
  if ("container" in options) {
    console.log(options);
  }
}

////

interface IForm {
  login: string;
  password: string;
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: Validate<IForm> = {
  login: { isValid: false, errorMsg: "At least 3 characters" },
  password: { isValid: true },
};

type Validate<T> = {
  [P in keyof T]: { isValid: false; errorMsg: string } | { isValid: true };
};


