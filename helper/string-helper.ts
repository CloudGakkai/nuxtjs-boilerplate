export const getRandomItemFromArray = (array: string[]): string => {
  if (!array || array.length === 0) {
    throw new Error("The array is empty or not defined.");
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
