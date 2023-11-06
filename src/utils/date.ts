export const dateToText = (timestamp: number) => {
  const date = new Date(timestamp);

  const day = date.toLocaleDateString('es-ES', { day: 'numeric' });
  const month = date.toLocaleDateString('es-ES', { month: 'long' });
  const year = date.toLocaleDateString('es-ES', { year: 'numeric' });

  const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${formattedMonth} ${day}, ${year}`;
};
