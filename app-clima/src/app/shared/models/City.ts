export interface City {
  name: string;
  weather: any[];
  main: {
    temp: number;
  };
  sys: {
    country: string,
  }
}
