export const generateId = (prefix: string): string => {
  const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const numbers = Math.floor(100000 + Math.random() * 900000);

  return `${prefix}_${letter}${numbers}`;
};
