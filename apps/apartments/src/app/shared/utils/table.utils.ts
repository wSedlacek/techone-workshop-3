export interface TableData {
  item: string;
  cost: any;
}

export const convertToTable = (object: object): TableData[] =>
  Object.entries(object)
    .filter(([key]) => key !== 'id')
    .map(([item, cost]) => ({
      item,
      cost,
    }));
