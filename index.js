"use strict";
// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["Video"] = "video";
    TypesOfMedia["Audio"] = "audio";
})(TypesOfMedia || (TypesOfMedia = {}));
var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["MP4"] = ".mp4";
    FormatsOfMedia["MOV"] = ".mov";
    FormatsOfMedia["MKV"] = ".mkv";
    FormatsOfMedia["FLV"] = ".flv";
    FormatsOfMedia["WEBM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia({ name, type, format, subtitles, marks } = {
    name: "example",
    type: TypesOfMedia.Audio,
    format: FormatsOfMedia.MP4,
}) {
    let marksLog;
    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
    if (Array.isArray(marks)) {
        marksLog = marks.join("");
    }
    else if (typeof marks === "string") {
        marksLog = marks;
    }
    else {
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
var AnimalStatus;
(function (AnimalStatus) {
    AnimalStatus["Available"] = "available";
    AnimalStatus["NotAvaialble"] = "not available";
})(AnimalStatus || (AnimalStatus = {}));
function isAvailable(res) {
    if (res.status === AnimalStatus.Available) {
        return true;
    }
    else {
        return false;
    }
}
function checkAnimalData(animal) {
    if (isAvailable(animal)) {
        return animal.data;
    }
    else {
        return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
    }
}
const player1 = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
};
const player2 = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
};
const player3 = {
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
var FigureNames;
(function (FigureNames) {
    FigureNames["Rect"] = "rect";
    FigureNames["Circle"] = "circle";
    FigureNames["Triangle"] = "triangle";
    FigureNames["Line"] = "line";
})(FigureNames || (FigureNames = {}));
function calculateAmountOfFigures(figure) {
    const amount = {
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
const data = [
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
// Типизировать объект phones
const phones = [
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
// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе
function filterPhonesByDate(phones, key, initial) {
    return phones
        .filter((phone) => {
        const manufact = phone[key];
        if (manufact instanceof Date &&
            manufact.getTime() > new Date(initial).getTime()) {
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
const fitnessClubCenter = {
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
function createSlider({ container = "", numberOfSlides = 1, speed = 300, direction = "horizontal", dots = true, arrows = true, } = {}) {
    console.log(container, numberOfSlides, speed, direction, dots, arrows);
}
createSlider();
// type Ifinally = IcustomSliderOptions && IchangeSpeed
const customSliderOptions = {
    container: "id",
    numberOfSlides: 4,
    speed: 1100,
    direction: "horizontal",
    dots: true,
    arrows: true,
};
function createCustomSlider(options) {
    if ("container" in options) {
        console.log(options);
    }
}
// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации
const validationData = {
    login: { isValid: false, errorMsg: "At least 3 characters" },
    password: { isValid: true },
};
