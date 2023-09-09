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

export interface IMovie {
  id: number;
  _id: number;
  idbID: string;
  overview: string;
  poster_path?: string;
  release_date: string;
  title: string;
  tagline: string;
  runtime: number;
  budget?: number;
  genres: { id: string; name: string }[];
  vote_average: number;
  genre_ids: number[];
}

export interface IReview {
  id: string;
  author: string;
  content: string;
  created_at: string;
  formattedPath: string | null;
  avatar_path: string | null;
  author_details?: { avatar_path: string };
}

export interface ITheme {
  [x: string]: string;
}

export interface ILocation {
  from: { location: object; prevLocation: object };
}

export interface IError {
  response: {
    data: {
      message: string;
    };
  };
}
