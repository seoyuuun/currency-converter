export function addComma(num) {
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

export function rmComma(str) {
  const num = String(str);
  return +num.replace(/[^\d]+/g, "");
}
