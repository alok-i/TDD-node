export function add(numbers: string): number {
  if (numbers.trim() === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.slice(2, delimiterEndIndex));
    numbers = numbers.slice(delimiterEndIndex + 1);
  }

  const numArray = numbers
    .split(delimiter)
    .map((num) => num.trim())
    .filter(Boolean);

  const negatives = numArray.filter((num) => parseFloat(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  // return sum.
  return numArray.reduce((sum, num) => sum + parseFloat(num), 0);
}
