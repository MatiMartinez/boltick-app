import { Event } from 'src/interfaces';

export interface Props {
  events: Event[];
  isLoading: boolean;
  onClose: () => void;
}
