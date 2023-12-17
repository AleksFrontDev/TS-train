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
