export function addComma(num) {
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

export function inputComma(str) {
  const comma = (str) => {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  };
  const uncomma = (str) => {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
  };
  return comma(uncomma(str));
}

export function rmComma(str) {
  const num = String(str);
  return +num.replace(/[^\d]+/g, '');
}
