export const areAllValuesNull = (obj: Record<string, any>): boolean => {
  return Object.values(obj).every((value) => value === null);
};

export const omitKey = <T, K extends keyof T>(
  obj: T,
  keyToOmit: K
): Omit<T, K> => {
  const { [keyToOmit]: _, ...rest } = obj;
  return rest;
};
