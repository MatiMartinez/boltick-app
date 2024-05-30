export const dateToText = (timestamp: number) => {
  const date = new Date(timestamp);

  const day = date.toLocaleDateString('es-ES', { day: 'numeric' });
  const month = date.toLocaleDateString('es-ES', { month: 'long' });
  const year = date.toLocaleDateString('es-ES', { year: 'numeric' });

  const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${formattedMonth} ${day}, ${year}`;
};

export const dateToSpanishText = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('es-ES', { month: 'long', day: 'numeric' });
};

export const dateToHHMM = (timestamp: number): string => {
  const date: Date = new Date(timestamp);
  let hours: string = date.getHours().toString();
  let minutes: string = date.getMinutes().toString();

  hours = hours.length < 2 ? '0' + hours : hours;
  minutes = minutes.length < 2 ? '0' + minutes : minutes;

  return `${hours}:${minutes} hs`;
};
