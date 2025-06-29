function getNonEmptyFields<T extends Record<string, any>>(
  values: T,
  data: Record<string, any>
): Partial<T> {
  const result: Partial<T> = {};

  for (const key in values) {
    const value = values[key];
    if (
      value !== undefined &&
      value !== null &&
      data?.[key] &&
      data[key] !== value &&
      (typeof value !== "string" || value.trim() !== "")
    ) {
      result[key] = value;
    }
  }
  return result;
}

export { getNonEmptyFields };
