/**
 * Creates a new array from a given array that is divided into chunks of a given size.
 * If the array cannot be evenly divided then the last chunk will be contain the leftovers.
 * @param arr The array to be divided into chunks
 * @param size The number of items to contain in each chunk
 */
export const chunk = <T>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
