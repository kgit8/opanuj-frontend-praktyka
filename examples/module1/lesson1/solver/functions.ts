export function addNumber(a: number, b:number) {
  return a + b;
}
export function subtractNumber(a: number, b: number) {
  return a - b;
}
export function multiplyNumer(a: number, b: number) {
  return a * b;
}

export function divideNumber(a: number, b: number): number {
  if (b === 0) {
    console.error('Error: Division by zero');
    return Infinity;
  }
  return a / b;
}