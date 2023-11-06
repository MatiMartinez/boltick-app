export interface Event {
  date: string;
  djs: DJ[];
  name: string;
  objectID: string;
  schedule: number;
}

export interface DJ {
  name: string;
}
