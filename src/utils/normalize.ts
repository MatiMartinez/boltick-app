export const normalizeEventLocationName = (location_name: string) => {
  if (!location_name || location_name === '') return 'Próximamente';
  return location_name;
};
