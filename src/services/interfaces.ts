export interface IActor {
    biography: string;
    profile_path: string;
    name: string;
    birthday: string;
    deathday: string;
    gender: number;
    place_of_birth: string;
    popularity: number;
    id: number;
    cast_id?: string;
    character?: string;
}

export interface ITheme {
    [x: string]: string
}