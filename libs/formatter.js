export default function formmater(col, value, translator) {
  let formatted = "";
  if (value === undefined || value === 0) {
    formatted = "-";
  } else if (col === "mktCap") {
    if (value > 1000000000000) {
      formatted = "$ " + (value / 1000000000000).toFixed(2) + "T";
    } else if (value > 1000000000) {
      formatted = "$ " + (value / 1000000000).toFixed(2) + "B";
    } else if (value > 1000000) {
      formatted = "$ " + (value / 1000000).toFixed(2) + "M";
    }
  } else if (translator[col].money) {
    formatted = Math.round(value / 1000000).toLocaleString("en-US");
  } else if (translator[col].ratio) {
    formatted = `${(value * 100).toFixed(2)}%`;
  } else if (translator[col].perShare) {
    formatted = value.toFixed(2);
  } else if (translator[col].share) {
    formatted = Math.round(value / 1000000).toLocaleString("en-US");
  } else if (translator[col].days) {
    formatted = value.toFixed(1);
  } else if (value === 0) {
    formatted = "-";
  } else if (translator[col].general) {
    formatted = Number(value).toLocaleString("en-US");
  } else {
    formatted = value;
  }

  return formatted;
}
