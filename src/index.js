module.exports = function solveEquation(equation) {
  let pattern = /(-?\s?\d*\s?)\*\s?x\^2\s?([+-]\s?\d+)\s?\*\s?x\s?([+-]\s?\d+)/;
  let result = equation.match(pattern).slice(1,4);
  const [a, b, c] = result.map(num => parseInt(num.replace(/ /gi, ''), 10));
  const x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2 * a);
  const x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2 * a);
  return [x1, x2].map(num => Math.round(num)).sort((a, b) => a - b);
}
