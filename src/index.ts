export function sumOfNumbers(input: string): number {
  if (input.trim() === "") {
    return 0;
  }

  return input.split(",").reduce((sum, num) => sum + parseFloat(num), 0);
}
