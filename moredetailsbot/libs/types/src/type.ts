export type User = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  allows_write_to_pm?: boolean;
};

export type UserData = {
  auth_date: number;
  query_id: string;
  user: User;
};

export type Validate = {
  validate: boolean;
  UserData: UserData;
};
