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
function playMedia(_a) {
  var _b =
      _a === void 0
        ? {
            name: "example",
            type: TypesOfMedia.Audio,
            format: FormatsOfMedia.MP4,
          }
        : _a,
    name = _b.name,
    type = _b.type,
    format = _b.format,
    subtitles = _b.subtitles,
    marks = _b.marks;
  var marksLog;
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
  console.log(
    "Media "
      .concat(name)
      .concat(format, " is ")
      .concat(type, "\n    Marks: ")
      .concat(marksLog, "\n    Subtitles: ")
      .concat(subtitles !== null && subtitles !== void 0 ? subtitles : "none")
  );
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
