export interface IActor {
  data: {
    biography: string;
    profile_path: string;
    name: string;
    birthday: string;
    deathday: string;
    gender: number;
    place_of_birth: string;
    popularity: number;
    id: number;
  }
}

export interface ITheme {
    [x: string]: string
}