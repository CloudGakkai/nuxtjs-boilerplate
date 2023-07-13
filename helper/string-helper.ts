export const getRandomItemFromArray = (array: string[]): string => {
  if (!array || array.length === 0) {
    throw new Error("The array is empty or not defined.");
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const formatSizeUnits = (bytes: number): string => {
  if (bytes >= 0) {
    const sizeInMB = bytes / 1024;
    const sizeInGB = sizeInMB / 1024;

    if (sizeInGB >= 1) {
      return `${sizeInGB.toFixed(2)} GB`;
    } else if (sizeInMB >= 1) {
      return `${sizeInMB.toFixed(2)} MB`;
    } else {
      return `${bytes.toFixed(2)} KB`;
    }
  } else {
    return "Invalid size";
  }
};
