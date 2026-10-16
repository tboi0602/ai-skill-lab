export const formatDisplayNumber = (value: string): string => {
  if (value === 'NaN' || value === 'Error') {
    return 'Error';
  }

  if (value.includes('.')) {
    const [integerPart, decimalPart] = value.split('.');
    const formattedInteger = Number(integerPart).toLocaleString();
    return `${formattedInteger}.${decimalPart}`;
  }

  const numericValue = Number(value);
  if (Number.isNaN(numericValue)) {
    return value;
  }

  return numericValue.toLocaleString();
};
