export interface TableData {
  item: string;
  cost: any;
}

/**
 * Takes an object and converts it into an array of objects with each key from the original
 * object being the `item` of the new objects and the values being the `cost`.
 *
 * Intended to be used to covert an object into a `dataSource` for a Angular Material Table
 *
 * @param object Any type of object literal.
 */
export const convertToTable = (object: object): TableData[] =>
  Object.entries(object)
    .filter(([key]) => key !== 'id')
    .map(([item, cost]) => ({
      item,
      cost,
    }));
