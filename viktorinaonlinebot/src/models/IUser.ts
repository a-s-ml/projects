export interface IUser {
  validate: boolean;
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  allows_write_to_pm?: boolean;
}

export interface IUserData {
  auth_date: number;
  query_id: string;
  user: IUser;
  validate: boolean;
  groups: number;
  answers: number;
  questions: number;
}
