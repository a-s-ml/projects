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
  group: IGroup;
}

export interface IGroup {
  id: number;
  chat: bigint;
  type: string;
  bot: number;
  date: Date;
  referral: bigint;
  question_type: number;
  time: number;
}

