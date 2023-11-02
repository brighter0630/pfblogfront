// import { EntoKo } from "@/translation";
import { EntoKo } from '@/translationFinnhub';

export default function divider(dataArray, col) {
  let unit = "";
  let newArray = [];

  if (EntoKo[col]["money"]) {
    if (dataArray.some((el) => Math.abs(el.value) > 1000000)) {
      unit = "T";
      newArray = dataArray.map((el) => {
        return {
          name: el.name,
          value: get2DigitsBelowZero(el.value / 1000000),
          unit: unit,
        };
      });
    } else if (dataArray.some((el) => Math.abs(el.value) > 1000)) {
      unit = "B";
      newArray = dataArray.map((el) => {
        return {
          name: el.name,
          value: get2DigitsBelowZero(el.value / 1000),
          unit: unit,
        };
      });
    } else if (dataArray.some((el) => Math.abs(el.value) > 1)) {
      unit = "M";
      newArray = dataArray.map((el) => {
        return {
          name: el.name,
          value: get2DigitsBelowZero(el.value / 1),
          unit: unit,
        };
      });
    } else {
      unit = "";
      newArray = dataArray.map((el) => {
        return {
          name: el.name,
          value: get2DigitsBelowZero(el.value),
          unit: unit,
        };
      });
    }
  } else if (EntoKo[col]["ratio"]) {
    unit = "%";
    newArray = dataArray.map((el) => {
      return {
        name: el.name,
        value: get2DigitsBelowZero(el.value * 100),
        unit: unit,
      };
    });
  } else if (EntoKo[col]["share"]) {
    unit = "M";
    newArray = dataArray.map((el) => {
      return {
        name: el.name,
				value: get2DigitsBelowZero(el.value/1000),
        unit: unit,
      };
    });
	} else if (EntoKo[col]['days']) {
		unit = "일";
		newArray = dataArray.map((el) => {
			return {
				name: el.name,
				value: get2DigitsBelowZero(el.value),
				unit: unit
			}
		});
	} else {
    unit = "";
    newArray = dataArray.map((el) => {
      return {
        name: el.name,
        value: get2DigitsBelowZero(el.value),
        unit: unit,
      };
    });
  }

  return newArray;
}

export function get2DigitsBelowZero(value) {
  return Math.round(value * 100) / 100;
}
