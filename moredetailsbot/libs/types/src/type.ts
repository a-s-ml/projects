export type User = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  allows_write_to_pm?: boolean;
};

export type UserData = {
  appUser: number;
  auth_date: number;
  query_id: string;
  user: User;
};

export type Validate = {
  validate: boolean;
  UserData: UserData;
};

export type EventChat = {
  id: number;
  name: string;
  admin: number;
  type: number;
};

export type Event = {
  type: string;
  user: EventUser;
  chat: EventChat;
  text: EventMessage | null;
};

export type EventUser = {
  id: number;
  tgid: number;
  name: string;
  type: number;
};

export type EventMessage = {
  id: number;
  user: number;
  chat: number;
  text: string;
};
