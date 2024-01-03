enum TransferStatus {
  Pending = "pending",
  Rejected = "rejected",
  Completed = "completed",
}

enum ErrorMessages {
  NotFound = "Not found: 404",
  NotEnoughSpace = "Not enough space: 507",
  Forbidden = "Forbidden: 403",
}

interface ITransfer {
  path: string;
  data: string[];
  date?: Date;
  start: (p: string, d: string[]) => string;
  stop: (reason: string) => string;
}

interface TransferError {
  message: ErrorMessages;
}

// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer implements ITransfer, TransferError {
  path: string = "";
  data: string[] = [];
  date?: Date;
  start!: (p: string, d: string[]) => string;
  stop!: (reason: string) => string;
  message!: ErrorMessages;

  checkTransferStatus(status: TransferStatus): undefined {
    if (status === "pending") {
      console.log("Wait a minute please");
    } else if (status === "completed") {
      console.log("Welkome");
    } else {
      console.log("Error");
    }
  }

  stopSendingData(current: ErrorMessages) {
    if (current === "Not found: 404") {
      console.log("404");
    } else if (current === "Not enough space: 507") {
      console.log("507");
    } else {
      console.log("403");
    }
  }

  makeError = (): string => {
    return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`;
  };

  // Место для реализаций

  // Необходимо создать метод checkTransfercurrent, проверяющий состояние передачи данных
  // Можно вывести в консоль данные, можно вернуть строку

  // Необходимо создать метод, который будет останавливать передачу данных
  // И возвращать строку с причиной и датой остановки (Дата в любом формате)

  // Необходимо создать метод, который будет возвращать строку, содержащую
  // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
  // Метод может показаться странным, но может использоваться для тестов, например
}
