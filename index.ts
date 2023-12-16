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
