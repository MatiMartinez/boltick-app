export const dateToText = (timestamp: number) => {
  const date = new Date(timestamp);

  const day = date.toLocaleDateString('es-ES', { day: 'numeric' });
  const month = date.toLocaleDateString('es-ES', { month: 'long' });
  const year = date.toLocaleDateString('es-ES', { year: 'numeric' });

  const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${formattedMonth} ${day}, ${year}`;
};

export const dateToSpanishText = (timestamp: number): string => {
  if (!timestamp || timestamp === 0) return 'Próximamente';
  const date = new Date(timestamp);
  return date.toLocaleDateString('es-ES', { month: 'long', day: 'numeric' });
};

export const dateToSpanishTextAndHHMM = (timestamp: number): string => {
  if (!timestamp || timestamp === 0) return 'Próximamente';

  const date = new Date(timestamp);
  const spanishText = date.toLocaleDateString('es-ES', { month: 'long', day: 'numeric' });

  let hours: string = date.getHours().toString();
  let minutes: string = date.getMinutes().toString();
  hours = hours.length < 2 ? '0' + hours : hours;
  minutes = minutes.length < 2 ? '0' + minutes : minutes;
  const HHMM = `${hours}:${minutes} hs`;

  return `${spanishText}, ${HHMM}`;
};
