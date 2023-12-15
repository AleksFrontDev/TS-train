// Интерфейс для склада с одеждой
interface ClothesWarehouse {
    jackets: "empty" | number;
    hats: "empty" | number;
    socks: "empty" | number;
    pants: "empty" | number;
}

// Интерфейс для склада с канцтоварами
interface StationeryWarehouse {
    scissors: "empty" | number;
    paper: "empty" | boolean;
}

// Интерфейс для склада с бытовой техникой
interface AppliancesWarehouse {
    dishwashers: "empty" | number;
    cookers: "empty" | number;
    mixers: "empty" | number;
}


interface TotalWarehouse
 extends ClothesWarehouse,
 StationeryWarehouse,
 AppliancesWarehouse {
	deficit: boolean;
	date: Date;
}



// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse  =  {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
	deficit: true,
	date: new Date()
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

function printReport(data: TotalWarehouse): string {
	const result: string = Object.entries(data)
		.filter((item) => item[1] === "empty")
		.reduce((res, item) => `${res} ${item[0]}`, "")
		.slice(2)
		
		if(result.length) {	
		return  `We need this items: ${{result}}`;
	} else {
		return "Everything fine";

	}
	
}

console.log(printReport(totalData));


